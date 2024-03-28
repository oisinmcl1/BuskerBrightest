<template>
  <body>
  <div class="admin-orders-container">
    <h1>Admin Orders</h1>
    <br>
    <br>
    <div class="order-list">
      <div class="customer-orders" v-for="(customerOrders, index) in orders" :key="index">
        <div class="order" v-for="(order, i) in customerOrders" :key="i">
          <h2>Order ID: {{ order.orderId }}</h2>
          <div class="customer-info">
            <h3>Customer Information:</h3>
            <p>Uid: {{ order.uid }}</p>
          </div>
          <div class="product-info">
            <h4>Product Name: {{ order.name }}</h4>
            <p>Price: ${{ order.price }}</p>
            <p>Customer Key: {{ order.customerKey }}</p>
          </div>
          <div class="separator"></div>
        </div>
        <div class="total-price">Total Price: ${{ customerOrders.totalPrice }}</div>
        <button @click="completeOrder(customerOrders[0].customerKey)" class="delete-order-btn">Complete Order</button>
      </div>
    </div>
  </div>
  </body>
</template>

<script>
import app from '../api/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getFunctions, httpsCallable } from "firebase/functions";
import { getFirestore, collection, getDocs, deleteDoc, doc, onSnapshot } from "firebase/firestore";
export default {
  data() {
    return {
      orders: [],
    };
  },
  async created() {
    const auth = getAuth(app);
    const user = auth.currentUser;
    console.log("user", user);
    const functions = getFunctions(app);
    const secureStaff = httpsCallable(functions, 'secureStaff');
    secureStaff({ "uid" : user.uid })
        .then((result) => {
          console.log(result);
          this.fetchOrders();
          this.setupRealtimeUpdates();
        });
  },
  methods: {
    async fetchOrders() {
      try {
        const db = getFirestore();
        const ordersCollection = collection(db, "ordersInProgress");
        const ordersSnapshot = await getDocs(ordersCollection);
        const ordersByCustomer = {}; // Object to store orders grouped by customer key

        ordersSnapshot.forEach((doc) => {
          const order = doc.data();
          const orderId = doc.id;
          const customerKey = order.customerKey;

          // Check if the customer key already exists in the object
          if (ordersByCustomer[customerKey]) {
            ordersByCustomer[customerKey].push({ ...order, orderId });
          } else {
            ordersByCustomer[customerKey] = [{ ...order, orderId }];
          }
        });

        // Convert object to array for easier iteration in the template
        this.orders = Object.values(ordersByCustomer);

        // Calculate total price for each customer's orders
        for (const customerOrders of this.orders) {
          let totalPrice = 0;
          for (const order of customerOrders) {
            // Convert price to integer after removing the first character (e.g., "$20" to 20)
            totalPrice += parseInt(order.price.substring(1));
          }
          // Assign total price to each customer's orders
          customerOrders.totalPrice = totalPrice;
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    },
    async moveOrderToCompletedOrders(orderId) {
      try {
        const functions = getFunctions(app);
        const moveTocompletedOrders = httpsCallable(functions, 'moveToCompletedOrders');
        const result = await moveTocompletedOrders({ orderId: orderId });
        console.log(result);
      } catch (error) {
        console.error("Error moving order to completedOrders:", error);
        // Optionally, you can display an error message to the user or take any other action here
      }
    },

    async removeOrder(orderId) {
      try {
        const functions = getFunctions(app);
        const removeOrder = httpsCallable(functions, 'removeOrder');
        const result = await removeOrder({ orderId: orderId });
        console.log(result);
      } catch (error) {
        console.error("Error removing order:", error);
        // Optionally, you can display an error message to the user or take any other action here
      }
    },
    async completeOrder(customerKey) {
      try {
        // Find orders with the specified customerKey
        const ordersToDelete = this.orders.filter(customerOrders => customerOrders[0].customerKey === customerKey);

        // Create an array of promises for moving orders to completed and removing orders
        const promises = ordersToDelete.flatMap(customerOrders => customerOrders.map(order => {
          return Promise.all([
          this.moveOrderToCompletedOrders(order.orderId),
          this.removeOrder(order.orderId)
          ]);
        }));

        // Wait for all promises to complete
        await Promise.all(promises);

        //After deleting the orders, update the orders list
        await this.fetchOrders();
        console.log("Orders with customer key", customerKey, "deleted successfully");
      }
      catch (error) {
    console.error("Error deleting orders by customer key:", error);
  }
    }
    ,
    setupRealtimeUpdates() {
      const db = getFirestore();
      const ordersCollection = collection(db, "ordersInProgress");

      // Subscribe to real-time updates
      onSnapshot(ordersCollection, async () => {
        console.log("Database updated. Fetching orders...");
        await this.fetchOrders(); // Fetch orders whenever there's a change in the database
      });
    }
  }
}

</script>

<style scoped>

body {
  font-family: 'Helvetica Neue', sans-serif;
  background-color: #191C23;
  color: #E9B464;
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
  display: flex; /* Use flexbox */
  align-items: center; /* Center content vertically */
  justify-content: center; /* Center content horizontally */
  min-height: 100vh; /* Ensure body fills at least the viewport height */
}

h1 {
  color: #E9B464; /* Set text color */
  font-size: 2.5rem; /* Set font size */
  text-align: center; /* Center-align the content */
  position: absolute; /* Position the title absolutely */
  top: 20px; /* Place it 20px from the top */
  left: 50%; /* Center horizontally */
  transform: translateX(-50%); /* Adjust for centering */
}

.admin-orders-container {
  font-family: 'Helvetica Neue', sans-serif;
  background-color: #191C23;
  color: #E9B464;
  padding: 20px;

}

.order-list {
  margin-top: 20px;
}

.customer-orders {
  background-color: #333;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.order {
  margin-bottom: 15px;
}

.customer-info, .product-info {
  background-color: #24282F;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

h1, h2, h3, h4 {
  color: #E9B464;
}

h2 {
  margin-top: 0;
}

.separator {
  border-bottom: 2px solid #6D4F4B;
  margin-top: 10px;
}

.total-price {
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 10px;
}

.delete-order-btn {
  font-size: 1rem;
  font-weight: bold;
  color: #EDC9AF;
  background-color: #6D4F4B;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  display: block;
  margin-top: 10px;
}

.delete-order-btn:hover {
  background-color: #D5954E;
  transform: translateY(-3px);
}

p {
  margin: 5px 0;
}
</style>
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
admin.initializeApp();

exports.adduser = functions.https.onCall((data, context) => {
  console.log("add user data ", data)
  // context.auth contains information about the user, if they are logged in etc.
  if (typeof context.auth === undefined) {
    // request is made from user that is logged in
    return "User is not logged in"
  } else {
    // add new user document to the collection users
    return admin.firestore().collection('users').add(data).then(() => {
      return { data: "Saved user in the database" };
    });
  }
});

exports.getQueue = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    // 1. Connect to our Firestore database
    console.log("request.body.data.uid", request.body.data.uid);
    const userId = request.body.data.uid;
    console.log("uid:", userId);

    let myData = []
    return admin.firestore().collection('queue').orderBy("data.loginTime").get().then((snapshot) => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        response.send({ data: 'No data in database' });
        return;
      }
      snapshot.forEach(doc => {
        myData.push(doc.id);
      });
      console.log(myData);
      const queueJSON = JSON.stringify(myData);
      console.log("Queue JSON:", queueJSON);
      const queueSize = myData.length;
      console.log("queue length", queueSize);
      let queuePosition = 0;
      for (let i = 0; i < myData.length; i++) {
        if (myData[i] === userId) {
          queuePosition = i + 1;
          break;
        }
      }
      console.log("queuePosition", queuePosition);
      // 2. Send data back to client
      response.send( { data: { queuePosition: queuePosition, queueSize: queueSize } } );
    });
  });
});

exports.removeFromQueue = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const userId = request.body.data.uid;
    console.log("uid:", userId);
    return admin.firestore().collection("queue").doc(userId).delete().then(() => {
      response.json({ data: "Document successfully deleted" });
    })
  });
});

exports.removeFromActiveUsers = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const userId = request.body.data.uid;
    console.log("uid:", userId);
    return admin.firestore().collection("activeUsers").doc(userId).delete().then(() => {
      response.json({ data: "Document successfully deleted" });
    })
  });
});

exports.updatecomment = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    return admin.firestore().collection('comments').doc(request.query.id)
    .update({"data.comment" : request.body.data.comment})
    .then(() => { response.json({ data: "Updated document in database" }); });
  });
});


exports.securefunction = functions.https.onCall((data, context) => {
  // context.auth contains information about the user, if they are logged in etc.
  if (typeof context.auth === undefined) {
    // request is made from user that is logged in
    return "User is not logged in"
  } else {
    return "User is logged in"
  }
});

exports.secureStaff = functions.https.onCall(async (data, context) => {
  // context.auth contains information about the user, if they are logged in etc.
  if (typeof context.auth === undefined) {
    // request is made from user that is logged in
    return "User is not logged in"
  } else {
    console.log(data.uid);
    const userSnapshot = await admin.firestore().collection('staff').doc(data.uid).get();
    if (!userSnapshot.exists) {
      console.log('No matching documents.');
      return { error: 'No data in database' };
    }
    else{
      return "Staff logged in successfully";
    }
  }
});

exports.checkActiveUser = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    let activeUsers = []
    return admin.firestore().collection('activeUsers').get().then((snapshot) => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        response.send({ data: 'No data in database' });
        return;
      }
      snapshot.forEach(doc => {
        activeUsers.push(doc.id);
      });
      console.log(activeUsers);
      const queueJSON = JSON.stringify(activeUsers);
      console.log("Queue JSON:", queueJSON);
      const activeUsersCount = activeUsers.length;
      console.log("activeUsers", activeUsersCount);
      // 2. Send data back to client
      response.send( { data: activeUsersCount } );
    });
  });
});

exports.addToQueueDB = functions.https.onCall((data, context) => {
  console.log("add user to queue ", data)
  // context.auth contains information about the user, if they are logged in etc.
  if (typeof context.auth === undefined) {
    // request is made from user that is logged in
    return "User is not logged in"
  } else {
    const currentTime = admin.firestore.Timestamp.now();
    data.loginTime = currentTime;
    const uid = data.uid;
    console.log("uid:", uid);
    data.access = false;
      // add new user document to the collection users
      return admin.firestore().collection('queue').doc(uid).set({data}).then(() => {
        console.log( "Saved user in the queue");
      }).catch((error) => {
        console.error("Error writing document: ", error);
      });
    }
});

exports.addToActiveUsersDB = functions.https.onCall((data, context) => {
  console.log("add user to queue ", data)
  // context.auth contains information about the user, if they are logged in etc.
  if (typeof context.auth === undefined) {
    // request is made from user that is logged in
    return "User is not logged in"
  } else {
    const currentTime = admin.firestore.Timestamp.now();
    data.loginTime = currentTime;
    const uid = data.uid;
    console.log("uid:", uid);
    data.access = true;
      // add new user document to the collection users
      return admin.firestore().collection('activeUsers').doc(uid).set({data}).then(() => {
        console.log( "Saved user in the queue");
      }).catch((error) => {
        console.error("Error writing document: ", error);
      });
    }
});

exports.staffCheck = functions.https.onCall(async (data, context) => {
  console.log("Check if staff details are correct ", data);

  // Check if the request is made by an authenticated user
  if (!context.auth) {
    // User is not logged in
    return { error: "Staff not logged in" };
  } else {
    try {
      // Retrieve user data from Firestore
      const userSnapshot = await admin.firestore().collection('users').doc(data.uid).get();

      if (!userSnapshot.exists) {
        console.log('No matching documents.');
        return { error: 'No data in database' };
      }

      const currentTime = admin.firestore.Timestamp.now();
      const uid = data.uid;
      console.log("UID:", uid);

      // Update user data
      const userData = {
        ...data,
        uid : uid,
        loginTime: currentTime,
        access: true,
        credentials: "staff"
      };

      // Add user document to the 'staff' collection
      await admin.firestore().collection('staff').doc(uid).set(userData);

      console.log("Staff checked succesfully and added to staff login");
      return { success: true };
    } catch (error) {
      console.error("Error in staffCheck function: ", error);
      return { error: "An error occurred while processing the request" };
    }
  }
});

exports.logout = functions.https.onCall(async (data, context) => {
  try {
    // Check if the user is authenticated
    if (!context.auth) {
      throw new Error('Authentication required.');
    }

    // Get the user ID
    const userId = context.auth.uid;

    // Delete the user's document from the active users collection
    await admin.firestore().collection('activeUsers').doc(userId).delete();
    await admin.firestore().collection('queue').doc(userId).delete();
    return { success: true };
  } catch (error) {
    console.error('Error logging out:', error);
    return { error: error.message };
  }
});

exports.staffLogout = functions.https.onCall(async (data, context) => {
  try {
    // Check if the user is authenticated
    if (!context.auth) {
      throw new Error('Authentication required.');
    }

    // Get the user ID
    const userId = context.auth.uid;
    console.log(context.auth.uid);

    // Delete the user's document from the active users collection
    await admin.firestore().collection('staff').doc(userId).delete();
    return { success: true };
  } catch (error) {
    console.error('Error logging out:', error);
    return { error: error.message };
  }
});


exports.clearCart = functions.https.onRequest(async (req, res) => {
    // Enable CORS
    cors(req, res, async () => {
        try {
            // Delete all documents from the 'cart' collection
            const cartSnapshot = await admin.firestore().collection('cart').get();
            const batch = admin.firestore().batch();
            cartSnapshot.forEach((doc) => {
                batch.delete(doc.ref);
            });
            await batch.commit();

            // Respond with success message
            return res.status(200).send({ message: 'Cart cleared successfully.' });
        } catch (error) {
            console.error('Error clearing cart:', error);
            return res.status(500).send({ error: 'Failed to clear cart.' });
        }
    });
});
exports.copyCartToOrders = functions.https.onRequest(async (request, response) => {
  cors(request, response, async () => {
    try {
        const cartSnapshot = await admin.firestore().collection('cart').get();

        // Check if cart is empty
        if (cartSnapshot.empty) {
            return response.status(200).send({ message: 'Cart is empty. No orders to copy.' });
        }

        const batch = admin.firestore().batch();
        const ordersCollectionRef = admin.firestore().collection('ordersInProgress');

        cartSnapshot.forEach(doc => {
            const cartItem = doc.data();
            // Create a new document in the orders collection using the same data from the cart
            const orderDocRef = ordersCollectionRef.doc();
            batch.set(orderDocRef, cartItem);
        });

        // Commit the batch write to Firestore
        await batch.commit();

        return response.status(200).send({ message: 'Cart items copied to orders successfully.' });
    } catch (error) {
        console.error('Error copying cart to orders:', error);
        return response.status(500).send({ error: 'Failed to copy cart to orders.' });
    }
  });
});

//updated post comment
exports.postcomment = functions.https.onRequest((request, response) => {
    cors(request, response, async () => {
        try {
            const { uid, name, price, customerKey } = request.body;

            // Check if required data is provided
            if (!uid || !name || !price || !customerKey) {
                return response.status(400).send({ error: 'Incomplete data provided.' });
            }

            const item = {
                uid: uid, // Save user UID
                name: name,
                price: price,
                customerKey: customerKey, // Save customerKey along with other product details
                timestamp: admin.firestore.Timestamp.now()
            };

            // Add item to the cart collection in Firestore
            await admin.firestore().collection('cart').add(item);

            // Send a single response containing all the necessary data
            response.send({
                data: {
                    message: "Item added to the cart successfully.",
                    customerKey: customerKey,
                    price: price,
                    name: name
                }
            });

            // Log the added item to the console
            console.log("Item added to cart:", item);
        } catch (error) {
            console.error('Error adding item to cart:', error);
            return response.status(500).send({ error: 'Failed to add item to cart.' });
        }
    });
});

exports.moveToCompletedOrders = functions.https.onRequest(async (request, response) => {
  // Enable CORS
  cors(request, response, async () => {
      try {
        console.log(request.body.data.orderId);
        const orderId = request.body.data.orderId;
          const orderSnapshot = await admin.firestore().collection('ordersInProgress').doc(request.body.data.orderId).get();

          if (orderSnapshot.empty) {
              return response.json({ data: 'orderSnapshot is empty' });
          }
          console.log(orderSnapshot);

          const orderData = orderSnapshot.data();
          const completedOrdersCollectionRef = admin.firestore().collection('completedOrders');
          const orderDocRef = completedOrdersCollectionRef.doc(orderId);
          return orderDocRef.set(orderData).then(() => {
            console.log("moved order to completed orders"),
            response.json({data: "moved order to completed orders"});
          });
      } catch (error) {
          console.error('Error copying order to completedOrders:', error);
          return response.status(500).json({ error: 'Failed to copy order to completedOrders.' });
      }
  });
});

exports.removeOrder = functions.https.onRequest(async (request, response) => {
  cors(request, response, async () => {
    try {
      const orderId = request.body.data.orderId;
      console.log("orderId:", orderId);
      return admin.firestore().collection("ordersInProgress").doc(orderId).delete().then(() =>
      console.log("deleted from db"),
      response.json({data: "doccument successfully deleted"}));
    } catch (error) {
      console.error('Error removing order:', error);
      return response.status(500).json({ error: 'Failed to delete document' });
    }
  });
});

exports.getOrdersByUser = functions.https.onRequest(async (request, response) => {
  cors(request, response, async () => {
  try {
      const uid = request.body.uid; // Assuming the user's UID is sent in the request body
      console.log("uid", uid);
      const orders = []; // Initialize an array to store orders

      // Query the completedOrders collection for documents with the given UID
      const querySnapshot = await admin.firestore().collection('completedOrders').where('uid', '==', uid).get();
      // Loop through the query snapshot to extract order data
      querySnapshot.forEach(doc => {
          const orderData = doc.data();
          orderData.id = doc.id;
          orders.push(orderData);
      });

      console.log("orders", orders);

      // Send the array of orders in the response
      return response.status(200).json({ orders });
  } catch (error) {
      console.error('Error retrieving orders by user:', error);
      return response.status(500).json({ error: 'Failed to retrieve orders by user.' });
  }
});
});

exports.moveOrderToHistory = functions.https.onCall(async (data, context) => {
  try {
    const orderId = data.orderId;

    // Retrieve the order from completedOrders collection
    const orderSnapshot = await admin.firestore().collection('completedOrders').doc(orderId).get();

    if (!orderSnapshot.exists) {
      throw new functions.https.HttpsError('not-found', 'Order not found in completedOrders collection');
    }

    const orderData = orderSnapshot.data();
    orderData.completed = true;
    // Move the entire document to orderHistory collection
    await admin.firestore().collection('orderHistory').doc(orderId).set(orderData);

    // Delete the order from completedOrders collection
    await admin.firestore().collection('completedOrders').doc(orderId).delete();

    return { success: true };
  } catch (error) {
    console.error('Error moving order to history:', error);
    if (error instanceof functions.https.HttpsError) {
      throw error;
    } else {
      throw new functions.https.HttpsError('internal', 'Failed to move order to history');
    }
  }
});

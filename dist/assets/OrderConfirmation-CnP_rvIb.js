import{g as h,o as m,a as g,j as d,h as p,s as _,b as l,c as a,i as y,e as s,F as v,q as O,t as f,p as C,l as b}from"./index-DTOr8pt5.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";const I={data(){return{orderReady:!1,uid:"",orders:[],collectedOrders:!1,ordersHaveBeenChecked:!1,allOrdersCollected:!1}},mounted(){const o=h(d);m(o,e=>{e?(this.uid=e.uid,this.intervalID=setInterval(async()=>{await this.isOrderReady()},5e3)):console.log("user not logged in!")})},methods:{async isOrderReady(){try{const e=await(await fetch("https://us-central1-virtual-queue-app2.cloudfunctions.net/getOrdersByUser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid:this.uid})})).json();e&&e.orders&&e.orders.length>0?(this.orders=e.orders,this.orderReady=!0,this.collectedOrders=!1):(this.orderReady=!1,this.collectedOrders=!0),this.allOrdersCollected=this.orders.length>0&&this.orders.every(t=>t.completed)}catch(o){console.error("Error checking if orders are ready:",o)}},async collectOrder(o){console.log("completing order:",o);try{this.ordersHaveBeenChecked=!0;const e=g(d),c=await p(e,"moveOrderToHistory")({orderId:o.id});console.log(c.data)}catch(e){console.error("Error moving order to history:",e)}},beforeDestroy(){clearInterval(this.intervalID)},logout(){const o=g(d);p(o,"logout")({uid:this.uid}).then(t=>{console.log("result:",t),_(h(d)).then(()=>{this.$router.push("/"),console.log("logged out")})}).catch(t=>{const c=t.code,r=t.message;console.log(c),console.log(r)})}}},i=o=>(C("data-v-a19849ed"),o=o(),b(),o),B={class:"confirmation-container"},w=i(()=>s("h1",{class:"confirmation-title"},"Order Confirmation",-1)),R=i(()=>s("p",{class:"confirmation-message"},"Your order has been placed successfully!",-1)),S={key:0,class:"confirmation-message"},D={key:1,class:"orders-list"},T=i(()=>s("h2",null,"Your Orders:",-1)),H={class:"order-details"},P=["onClick"],j={class:"all-collected-message"},E=i(()=>s("p",null,"Thank you for using our service! Press the button below to log out.",-1));function N(o,e,t,c,r,u){return l(),a("div",B,[w,R,r.orderReady?y("",!0):(l(),a("p",S,"Please wait for your order to be prepared.")),r.orderReady?(l(),a("div",D,[T,s("ul",null,[(l(!0),a(v,null,O(r.orders,n=>(l(),a("li",{key:n.id,class:"order-item"},[s("div",H,[s("h5",null,"Product Name: "+f(n.name),1),s("h6",null,"Price: "+f(n.price),1)]),s("button",{class:"collect-btn",onClick:x=>u.collectOrder(n)},"Collect Order",8,P)]))),128))])])):y("",!0),s("div",j,[E,s("button",{class:"logout-btn",onClick:e[0]||(e[0]=n=>u.logout())},"Enjoy your night!")])])}const A=k(I,[["render",N],["__scopeId","data-v-a19849ed"]]);export{A as default};

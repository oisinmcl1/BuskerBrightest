// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4dw5I-nvsIVUy6SiWF3AoTTiCIgqCKBc",
  authDomain: "virtual-queue-app2.firebaseapp.com",
  projectId: "virtual-queue-app2",
  storageBucket: "virtual-queue-app2.appspot.com",
  messagingSenderId: "749463391146",
  appId: "1:749463391146:web:88b8299c8628022011b9d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
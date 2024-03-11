<template>
    <div class="container">
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" v-model="password" class="form-control" id="exampleInputPassword1"
                placeholder="Password">
        </div>
        <button @click="login" class="btn btn-primary">Login</button>
    </div>
</template>

<script>
import app from "../api/firebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";
export default {
    name: "Login", data() {
        return {
            email: "",
            password: "",
            loginTime: 0,
            access : false
        }
    },
    methods: {
        login() {
            const auth = getAuth(app);
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed in
                    const functions = getFunctions(app);
                    const addToQueue = httpsCallable(functions, 'addtoqueue');
                    const user = userCredential.user;
                    addToQueue({ "uid" : user.uid, "loginTime" : this.loginTime,  "access" : this.access })
                    console.log(user)
                    this.$router.push({path: '/queue'})
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code; 
                    const errorMessage = error.message; 
                    
                    console.log(errorCode)
                    console.log(errorMessage)
                    // ..          
                });
        }
    }
}
</script>


<script>
import app from '../api/firebase';
import { getFunctions, httpsCallable, connectFunctionsEmulator } from "firebase/functions";

export default {
    data() {
        return {
            handle: '',
            comment: '',
            commentsArray: [],
            tempValue: "",
            editing: false
        }
    },
    created() {
        //this.getComments();   
    },
    methods: {
        postComment() {
            let loader = this.$loading.show({
                // Optional parameters  
                container: this.$refs.container,
                canCancel: false
            });
            const functions = getFunctions(app);
            if(window.location.hostname === 'localhost') // Check if working locally            
                connectFunctionsEmulator(functions, "localhost", 5001);
            
            const postComment = httpsCallable(functions, 'postcomment');
            postComment({ "handle": this.handle, "comment": this.comment })
                .then((result) => {
                    // Read result of the Cloud Function.
                    /** @type {any} */
                    this.getComments();
                    console.log(result);
                    loader.hide();
                });
        },
        getComments() {
            const functions = getFunctions(app);
            const getComments = httpsCallable(functions, 'getcomments');
            let loader = this.$loading.show({
                // Optional parameters  
                container: this.$refs.container,
                canCancel: false
            });
            getComments().then((result) => {
                // Read result of the Cloud Function.
                // /** @type {any} */
                console.log(result);
                loader.hide();
                if (result.data != "No data in database")
                    this.commentsArray = result.data;
                else
                    this.commentsArray = [];
            });
        },
        deleteComment(id) {
            const functions = getFunctions(app);
            const deleteComment = httpsCallable(functions, 'deletecomment?id=' + id);
            let loader = this.$loading.show({
                // Optional parameters  
                container: this.$refs.container,
                canCancel: false
            });
            deleteComment().then((result) => {
                console.log(result);
                loader.hide();
                if (result.data == "Document successfully deleted")
                    this.getComments() // To refresh the client
            })
        },
        enableEditing(comment) {
            this.tempValue = comment;
            this.editing = true;
        },
        disableEditing() {
            this.tempValue = null; this.editing = false;
        },
        save(id) {
            const functions = getFunctions(app);
            const updateComment = httpsCallable(functions, 'updatecomment?id=' + id);
            // Data field automatically populated by Firebase client lib
            // JSON that will arrive at the server will be { data : {comment : "text from input"} }  
            updateComment({ comment: this.tempValue }).then((result) => { this.getComments(); this.editing = false; });
        }
    }
}


</script>

<template>
    <h1>Welcome to my blog</h1>
    <router-link to="/">Go to Home</router-link>
    <br>
    <router-link to="/blog">Go to Blog</router-link>
    <p>This is my blog page for my SaaS app</p>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" v-model="handle" class="form-control" id="exampleFormControlInput1"
                        placeholder="name@example.com">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Comment</label>
                    <textarea class="form-control" v-model="comment" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="mb-3">
                    <button type="button" @click="postComment" class="btn btn-info text-white">Post Comment</button>
                </div>
            </div>
        </div>
        <p>Message is {{ comment }}</p>
        <input v-model="comment" type="text" class="form-control">
        <div class="mb-3 right">
            <button type="button" @click="getComments" class="btn btn-primary">Show Comments</button>
        </div>        
        <div v-if="commentsArray.length > 0">
            <ul>
                <li v-for="comment in commentsArray">
                    <div v-if="!editing">
                        <span @click="enableEditing(comment.data.comment)">
                            {{ comment.data.comment }}</span>
                    </div>
                    <div v-if="editing">
                        <input v-model="tempValue" class="input" />
                        <button @click="disableEditing">Cancel</button>
                        <button @click="save(comment.id)">Save</button>
                    </div>
                    <button type="button" @click="deleteComment(comment.id)" class="btn btn-primary">Delete Comment
                    </button>
                </li>
            </ul>
        </div>

    </div>
</template>



<style></style>
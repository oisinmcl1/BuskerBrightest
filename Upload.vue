<template>
    <label for="avatar">Choose a profile picture:</label>
    <input ref="file" @change="handleFileUpload()" type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
    <img ref="image" src="" alt="">
</template>

<script>
import app from "../api/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(app);

export default {
    name: "Upload",
    data() {
        return {
        }
    },
    methods: {
        handleFileUpload() {
            // Checking if the user is logged in 
            // You have to add an auth state change observer.

            onAuthStateChanged(getAuth(), (user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/auth.user
                    const uid = user.uid;
                    // Creates a folder images (if it doesn't already exist)            
                    const storageRef = ref(storage, 'images/' + this.$refs.file.files[0].name);
                    
                    // Uploads to the the storage bucket
                    const functions = getFunctions(app);
                    const updateUser = httpsCallable(functions, 'updateuser');
                    uploadBytes(storageRef, this.$refs.file.files[0]).then((snapshot) => {
                        // Gets a URL of the image 
                        getDownloadURL(snapshot.ref).then((downloadURL) => {
                            // Update the SRC attribute to the downloadURL
                            this.$refs.image.setAttribute("src", downloadURL);
                            updateUser({ uid : user.uid, imageURL: downloadURL })
                                .then((result) => {
                                    // Read result of the Cloud Function.
                                    /** @type {any} */
                                    console.log(user)                                    
                                });
                            console.log(downloadURL);
                        });
                    });
                } else {
                    // No user is signed in.
                    alert("In order to upload a profile pic you must be logged in ")
                }
            });
        }
    }
}

</script>
<style></style>
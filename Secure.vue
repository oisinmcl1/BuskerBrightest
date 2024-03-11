<template>
    <h1>Welcome to the secure page</h1>
</template>
<script>
import app from '../api/firebase';
import { getFunctions, httpsCallable } from "firebase/functions";
export default {
    name: "Secure",
    created() {
        // Call secure function and load some data
        const functions = getFunctions(app);
        const secureFunction = httpsCallable(functions, 'securefunction');
        secureFunction()
            .then((result) => {
                // Read result of the Cloud Function.
                /** @type {any} */
                console.log(result);
            });
    }
}

</script> 


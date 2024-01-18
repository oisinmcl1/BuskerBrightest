/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
//
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
   logger.info("Hello logs!", {structuredData: true});
   response.send("Hello from Firebase!");
});
/*
exports.myFirstFunction = onRequest((request, response) => {
   logger.info("My first function called", {structuredData: true});
   response.send("This is my first backend function");
});

exports.notLoggedIn = onRequest((request, response) => {
   logger.info("Not logged In!", {structuredData: true});
   response.send("Not logged In!");
});

exports.doubleNumber = functions.https.onRequest((request, response) => {
   // Retrieve the 'value' from the query string parameters
   const value = request.query.value;

   // Try to convert 'value' to a Number type
   const number = Number(value);

   // Check if the conversion gave us a valid number
   if (!isNaN(number)) {
      // If it's a number, calculate the doubled value
      const doubled = (number * 2);

      // Send back the doubled value in the response with some text
      response.send("Doubled value: " + doubled);
   }
   else {
      // If it's not a number, send back an error message
      response.send("False input");
   }
});
 */

exports.receiveComment = onRequest((request, response) => {
   // Ensure that this function only responds to POST requests
   if (request.method === "POST") {
      // Get the comment from the request body assuming it's JSON formatted
      const comment = request.body.Comment;

      // Log the comment and respond
      if (typeof comment === 'string') {
         logger.info("Received comment", {structuredData: true, comment});
         response.status(200).send("I received your comment, thank you");
      } else {
         response.status(400).send("Please send a string as the Comment");
      }
   } else {
      // Respond with an error code if the request is not a POST
      response.status(405).send("Only POST requests are accepted");
   }
});

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.postcomments = functions.https.onRequest((request, response) => {
   // 1. Receive comment data in here from user POST request
   // 2. Connect to our Firestore database

   const currentTime = admin.firestore.Timestamp.now();
   request.body.timestamp = currentTime;

   return admin.firestore().collection('comments').add(request.body).then(()=>{
      response.send("Saved in the database");
   });
});

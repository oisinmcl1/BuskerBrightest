
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
admin.initializeApp();

// Accept comment and return the same comment to the user
exports.postcomment = functions.https.onRequest((request, response) => {

  cors(request, response, () => {
    const currentTime = admin.firestore.Timestamp.now();
    request.body.timestamp = currentTime;
    request.body.likes = 0;    

    return admin.firestore().collection('comments').add(request.body).then(() => {
      response.send({ data: "Saved in the database" });
    });
  })

});

exports.getcomments = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    // 1. Connect to our Firestore database
    let myData = []
    return admin.firestore().collection('comments').orderBy("timestamp", "desc").get().then((snapshot) => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        response.send({ data: 'No data in database' });
        return;
      }
      snapshot.forEach(doc => {
        myData.push(Object.assign(doc.data(), { id: doc.id }));
      });
      // 2. Send data back to client
      response.send({ data: myData });
    });
  });
});

exports.deletecomment = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    // deletes a comment using the id of the document
    return admin.firestore().collection("comments").doc(request.query.id).delete().then(() => {
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

exports.addtoqueue = functions.https.onCall((data, context) => {
  console.log("add user to queue ", data)
  // context.auth contains information about the user, if they are logged in etc.
  if (typeof context.auth === undefined) {
    // request is made from user that is logged in
    return "User is not logged in"
  } else {
    const currentTime = admin.firestore.Timestamp.now();
    data.loginTime = currentTime;
    data.access = false;
      // add new user document to the collection users
      return admin.firestore().collection('queue').add(data).then(() => {
        return { data: "Saved user in the queue" };
      });
    }
});

exports.updateuser = functions.https.onCall((data, context) => {
  console.log("update user data ", data)
  // context.auth contains information about the user, if they are logged in etc.
  if (typeof context.auth === undefined) {
    // request is made from user that is logged in
    return "User is not logged in"
  } else {
      // add new user document to the collection users
      return admin.firestore().collection('users').where("uid", "==", data.uid).get().then((snapshot ) => {
                
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }
        
        snapshot.forEach(doc => {
          // Should be only 1 document per user
          doc.ref.update({imageURL: data.imageURL})
          console.log(doc.id, '=>', doc.data());
        });
        
        return { data: "User record in the database updated" };
      });
    }
});

// Function to manage site access
exports.manageSiteAccess = functions.https.onRequest(async (request, response) => {
  cors(request, response, async () => {
      try {
          // Retrieve users from the 'queue' collection sorted by login time
          const queueSnapshot = await admin.firestore().collection('queue').orderBy("loginTime").get();
          if (queueSnapshot.empty) {
              console.log('No users in the queue.');
              return response.status(200).send({ message: 'No users in the queue.' });
          }

          // Determine the number of users to grant access (up to 10)
          const accessCount = Math.min(queueSnapshot.size, 10);

          // Extract user data from queue documents
          const queueUsers = [];
          queueSnapshot.forEach(doc => {
              queueUsers.push({ id: doc.id, ...doc.data() });
          });

          // Update access status for the first 10 users in the queue
          const updatePromises = [];
          for (let i = 0; i < accessCount; i++) {
              const user = queueUsers[i];
              // Set access to true in the queue document
              updatePromises.push(admin.firestore().collection('queue').doc(user.id).update({ access: true }));
              // Copy user document to the 'activeUsers' collection
              admin.firestore().collection('activeUsers').add(user);
              // Delete user document from the queue collection
              admin.firestore().collection('queue').doc(user.id).delete();
          }

          // Wait for all updates to complete
          await Promise.all(updatePromises);

          return response.status(200).send({ message: `Site access granted to ${accessCount} users.` });
      } catch (error) {
          console.error('Error managing site access:', error);
          return response.status(500).send({ error: 'Failed to manage site access.' });
      }
  });
});

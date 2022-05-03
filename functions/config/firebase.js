const { getFirestore } = require('firebase-admin/firestore');

const { initializeApp, applicationDefault } = require('firebase-admin/app');

initializeApp({
  credential: applicationDefault(),
  databaseURL: "https://teste-72112.firebaseio.com/"
})

const db = getFirestore();
// [END initialize_app]
await db.terminate();
// Destroy connection so we can run other tests that initialize the default app.
return db;
module.exports = db;

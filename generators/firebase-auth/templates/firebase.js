import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

export default new Proxy(
  {
    get database() {
      return firebase.firestore();
    },
    get auth() {
      return firebase.auth();
    },
    providers: {
      get google() {
        return new firebase.auth.GoogleAuthProvider();
      },
    },
  },
  {
    get: function(target, name) {
      if (!firebase.apps.length) {
        firebase.initializeApp({
          apiKey: process.env.API_KEY,
          authDomain: process.env.AUTH_DOMAIN,
          databaseURL: process.env.DATABASE_URL,
          projectId: process.env.PROJECT_ID,
          storageBucket: process.env.STORAGE_BUCKET,
          messagingSenderId: process.env.MESSAGING_SENDER_ID,
          appId: process.env.APP_ID,
        });
      }

      return target[name];
    },
  }
);

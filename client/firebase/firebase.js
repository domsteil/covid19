import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
    };

    const devConfig = {
        apiKey: process.env.REACT_APP_DEV_API_KEY,
        authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
        projectId: process.env.REACT_APP_DEV_PROJECT_ID,
        storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
        };
        

      const config = prodConfig;
      
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
      }
      
    const db = firebase.database();
      const auth = firebase.auth();
      
      export {
        db,
        auth,
    };
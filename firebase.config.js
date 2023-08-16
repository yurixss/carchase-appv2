import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDQ5pMQmVxDLNup68FdGgo336Tj7wqh9I8",
    authDomain: "carchasev2.firebaseapp.com",
    projectId: "carchasev2",
    storageBucket: "carchasev2.appspot.com",
    messagingSenderId: "31512783284",
    appId: "1:31512783284:web:362c487757aa9b451a6ae1"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);

export {app, storage};
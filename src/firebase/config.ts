import { initializeApp } from "firebase/app";
import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json"
import { ServiceAccount } from "firebase-admin";
import * as dotenv from "dotenv";


dotenv.config();

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAFEBUCKER,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.API_ID,
};

const app = initializeApp(firebaseConfig);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount)
});

export default { app, admin };
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAtsxt2Rrc-ZqOQoGyx4vV64B953BECNVc",
    authDomain: "simple-task-manager-6624a.firebaseapp.com",
    projectId: "simple-task-manager-6624a",
    storageBucket: "simple-task-manager-6624a.firebasestorage.app",
    messagingSenderId: "297858248491",
    appId: "1:297858248491:web:12d83d02a01ddeec355f6e",
    measurementId: "G-HH4G1M02PX",
    databaseURL: "https://simple-task-manager-6624a-default-rtdb.firebaseio.com", // ✅ FIXED
};

export const app = initializeApp(firebaseConfig);

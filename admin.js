import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDqWJLQCgt70h3eZXaJjEZWJ0CL7wA8gu4",
  authDomain: "betstar-premium-v2.firebaseapp.com",
  projectId: "betstar-premium-v2",
  storageBucket: "betstar-premium-v2.firebasestorage.app",
  messagingSenderId: "468025575746",
  appId: "1:468025575746:web:1fcb558335714f7858e0db",
  measurementId: "G-J7HZ1JFR55"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Painel Administrativo conectado!");

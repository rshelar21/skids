import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDUsruzqpx6i1AtBqxUkCS7JwApQCK8eBg",
  authDomain: "skids-306c7.firebaseapp.com",
  projectId: "skids-306c7",
  storageBucket: "skids-306c7.appspot.com",
  messagingSenderId: "217739071459",
  appId: "1:217739071459:web:4d3e9191762ad919199ad6"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export {db}
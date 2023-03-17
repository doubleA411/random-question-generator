// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBtTTj30wIEUk000ccN90e7SXFOGaZHp0",
  authDomain: "ques-gen-92031.firebaseapp.com",
  projectId: "ques-gen-92031",
  storageBucket: "ques-gen-92031.appspot.com",
  messagingSenderId: "195788915002",
  appId: "1:195788915002:web:7374215684b2e08a1b9003",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// function writeQuestions() {
//   for (let i = 1; i <= 100; i++) {
//     firestore
//       .collection("questions")
//       .doc(i.toString())
//       .set({
//         id: i,
//         ques: `Question ${i}`,
//       })
//       .then(() => {
//         console.log(`Document ${i} successfully written!`);
//       })
//       .catch((error) => {
//         console.error(`Error writing document ${i}: `, error);
//       });
//   }
// }

export { db };
export default app;

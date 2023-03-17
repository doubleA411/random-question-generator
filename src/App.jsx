import "./App.css";
import { db } from "./firebase";
import { useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function App() {
  const [ques, setQues] = useState([]);

  const [isFetching, setIsFetching] = useState(false);

  const [open, setOpen] = useState(false);
  
  const [textFieldValues, setTextFieldValues] = useState({
    id: 0,
    ques: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const db = firebase.firestore();
      // const docRef = await db.collection("users").add({
      //   firstName: textFieldValues.firstName,
      //   lastName: textFieldValues.lastName,
      //   email: textFieldValues.email,
      // });

      // console.log("Document written with ID: ", docRef.id);
      await addDoc(collection(db, "questions"), {
        id: textFieldValues.id,
        ques: textFieldValues.ques,
      })
        .then(() => {
          console.log(`Document successfully written!`);
        })
        .catch((error) => {
          console.error(`Error writing document : `, error);
        });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    const collectionRef = collection(db, "questions");
    const snapshot = await getDocs(collectionRef);
    const documents = snapshot.docs.map((doc) => doc.data());
    setTextFieldValues({
      id: documents.length + 1,
      ques: "",
    });
  };

  // async function handleButtonClick() {
  //   for (let i = 0; i < 70; i++) {

  // }

  // const quesCollectionRef = collection(db, "questions");
  // const snapshot =  quesCollectionRef.get();
  // const documents = snapshot.docs.map(doc => doc.data());

  async function fetchRandomDocuments() {
    setIsFetching(true);
    const collectionRef = collection(db, "questions");
    const snapshot = await getDocs(collectionRef);
    const documents = snapshot.docs.map((doc) => doc.data());
    const shuffledDocuments = shuffleArray(documents);
    const ques = shuffledDocuments.slice(0, 10);
    console.log(ques);
    setQues(ques);
    setIsFetching(false);
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  ques.map((d) => {
    console.log(d.ques);
  });

  return (
    <div className="App">
      {/* Header */}
      <div className="header">
        <p className="title">Question Generator</p>
        <p className="add_button" onClick={handleClickOpen}>
          Add Questions
        </p>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Questions</DialogTitle>

        <DialogContent className="modal">
          <DialogContentText>
            Add new questions to the database from here
          </DialogContentText>
          <TextField
            value={textFieldValues.id}
            margin="dense"
            label="ID"
            type="number"
            id="id"
            fullWidth
            variant="standard"
            onChange={(e) =>
              setTextFieldValues({
                ...textFieldValues,
                id: e.target.value,
              })
            }
          ></TextField>
          <TextField
            value={textFieldValues.ques}
            margin="dense"
            label="Questions"
            type="text"
            id="ques"
            fullWidth
            variant="standard"
            onChange={(e) =>
              setTextFieldValues({
                ...textFieldValues,
                ques: e.target.value,
              })
            }
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>ADD</Button>
        </DialogActions>
      </Dialog>
      <div className="app_body">
        <h2 className="cap">
          Unleash Your Curiosity with the Ultimate Random Question Generator
        </h2>
        <div className="gen_btn">
          <button onClick={fetchRandomDocuments} disabled={isFetching}>
            <p>{isFetching ? "Fetching..." : "Generate Questions"}</p>
          </button>
        </div>
        <div className="questions">
          <p>
            <b>Questions</b>
          </p>
          <br />
          {ques.map((document) => (
            <p key={document.id}>{document.ques}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

// var arr = [
//   "Write short notes on object-oriented concepts.",
//   " Compare and contrast do while and while statements in JAVA.",
//   " Define: Variables",
//   "Write the use of ?: Operator with an example. ",
//   " What are Java Tokens? ",
//   "What is scope of a variable? ",
//   "Write a note on the?: Operator in Java.",
//   " Define: Encapsulation. ",
//   "Give the general form of a Switch statement with an example. ",
//   "Define: Encapsulation. ",
//   "List the rules for identifiers in Java. ",
//   "Write a note on: Increment and Decrement Operators.",
//   " Give the general form of switch statement. ",
//   "Write the use of extends keyword. ",
//   "Write six separators available in Java.",
//   "What do you mean by the keyword this? ",
//   "What are the uses of the keyword final? ",
//   "Mention the internal parts included in a java source file. ",
//   "What is the use of Dot operator? Give an example. ",
//   "Define constructor.",
//   "How will you create a class? ",
//   "What do you mean by abstract class? ",
//   "What are Objects?",
//   "Define constructor.",
//   "What is meant by Method Overriding? ",
//   "Give the basic form of a class definition in Java. ",
//   "Define constructor. ",
//   "Write a note on Multilevel Inheritance. ",
//   "Define method overloading. ",
//   "Write a note on declaration of Arrays. ",
//   "What are vectors?",
//   "What is an array? Give an example. ",
//   "Distinguish between a class and an object. ",
//   "What is meant by method overloading? ",
//   "Define: Static method. ",
//   "Distinguish between a superclass and subclass.",
//   "Write the two ways of declaring arrays with examples.",
//   "What are packages?",
//   " Define multithreading.",
//   "What are packages? ",
//   "Define: A Multithreaded program ",
//   "What is an Interface?",
//   "Define Multithreading. ",
//   " Define the term package.",
//   "What are threads?",
//   "Define: Interface.",
//   "What are threads? ",
//   "What is an interface? ",
//   "What is a package? How do you define it?",
//   "Name three methods and its purpose in interthread communication.",
//   "Define exception",
//   "Distinguish between input stream and output stream. ",
//   "Write the use of throw statement with an example",
//   "Write a note on: Streams.",
//   "How do we start a thread? ",
//   "What are Run-Time Errors? ",
//   "Write a note on: Input Stream Class. ",
//   "What do you mean by predefined streams? ",
//   "Create a simple applet in Java of your own. ",
//   "Define byte code. ",
//   "Define the term: Exception. ",
//   "What are Byte Streams? ",
//   "Define: Applet",
//   "What is the use of finally block? ",
//   "Define Applets.",
//   "List out the various java utilities. ",
//   "What are AWT classes? ",
//   "How to draw circle in Java? Give an example.",
//   " Write a note on draw_line () methods.",
//   "What is AWT?",
// ];

export default App;

// Random fucntion
// numbers from 0-50 (exclusive)

// console.log(array);

import React from "react";
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

function Home() {
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
    <div className="home">
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

export default Home;

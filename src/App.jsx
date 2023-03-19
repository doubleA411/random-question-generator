import "./App.css";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/generator" element={<Home />} />
        </Routes>
      </Router>
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

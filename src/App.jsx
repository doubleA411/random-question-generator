import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className="header">
        <p className="title">Question Generator</p>
        <p className="add_button">Add Questions</p>
      </div>
      <div className="app_body">
        <h2 className="cap">
          Unleash Your Curiosity with the Ultimate Random Question Generator
        </h2>
        <div className="gen_btn">
          <p>Generate Questions</p>
        </div>
        <div className="questions">
          <p>
            Questions
          </p>
          <br />
          <p>
            
            1. If you could witness any event from history, what would it be?
          </p>
          <br />
          <p>
            2. What's the most important lesson you've learned in the past year?
          </p>
          <br />
          <p> 3. If you could have any superpower, what would it be and why?</p>
          <br />
          <p>
            4. What's the most interesting place you've ever visited and why?
          </p>
          <br />
          5. If you could switch lives with anyone for a day, who would it be
          and why? <br />
        </div>
      </div>
      {/* Generated Questions */}
    </div>
  );
}

export default App;

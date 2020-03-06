import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ScotchInfoBar from "./ScotchInfoBar";

function App() {
  const [name, setName] = useState();
  const [age, setAge] = useState();

  const handleChange = event => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else {
      setAge(event.target.value);
    }
  };

  return (
    <div className="App">
      <div>
        <h2 className="subtitle is-4">Update Data from an input</h2>
      </div>

      {/* Display Data */}
      <div className="input-display">
        <p>Display Name: {name} </p>
        <p>Display Age: {age}</p>
      </div>

      {/* Collect User Inputs */}
      <div className="inputs">
        {/* Input name */}
        <div className="field">
          <label className="label">Name: </label>
          <input
            name="name"
            className="input"
            type="text"
            placeholder="William"
            value={name}
            onChange={handleChange}
          />
        </div>

        {/* Input age */}
        <div className="field">
          <label className="label">Age: </label>
          <input
            name="age"
            className="input"
            type="number"
            placeholder="38"
            value={age}
            onChange={handleChange}
          />
        </div>
      </div>
      <ScotchInfoBar seriesNumber="3" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

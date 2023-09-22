import { useState } from "react";
import "./App.css";
import generatePassword from "./utils/generatePassword";

function App() {
  const [charCounter, setCharCounter] = useState(9);
  const [selectedOption, setSelectedOption] = useState("yes");
  const [randomPassword, setRandomPass] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div>
        <h1>Password Gen</h1>
        <div>
          <p>Enter the number of characters you want your password to have</p>
          <p id="charCounter">{charCounter}</p>
          <input
            id="rangeInput"
            type="range"
            min="1"
            max="35"
            value={charCounter}
            onInput={(e) => setCharCounter(e.target.value)}
          />
        </div>
        <div>
          <p>Would you like the password to have special characters?</p>
          <p>( . , ; ! $ € etc )</p>
          <label htmlFor="yes">Yes</label>
          <input
            type="radio"
            id="yes"
            name="option"
            value="yes"
            checked={selectedOption === "yes"}
            onChange={handleOptionChange}
          />
          <label htmlFor="no">No</label>
          <input
            type="radio"
            id="no"
            name="option"
            value="no"
            checked={selectedOption === "no"}
            onChange={handleOptionChange}
          />
        </div>
        <button
          onClick={() =>
            setRandomPass(generatePassword(charCounter, selectedOption))
          }
        >
          Generate the new password
        </button>

        <div>
          {randomPassword !== "" && <h2>Your password is: </h2>}
          <h3 id="finallyPassword">{randomPassword}</h3>
        </div>
      </div>
    </>
  );
}

export default App;

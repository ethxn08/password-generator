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
          <p>{charCounter}</p>
          <input
            type="range"
            min="0"
            max="35"
            defaultValue={9}
            onChange={(e) => setCharCounter(e.target.value)}
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
            checked={selectedOption === "yes"} // Verifica si está seleccionado
            onChange={handleOptionChange} // Maneja el cambio
          />
          <label htmlFor="no">No</label>
          <input
            type="radio"
            id="no"
            name="option"
            value="no"
            checked={selectedOption === "no"} // Verifica si está seleccionado
            onChange={handleOptionChange} // Maneja el cambio
          />
        </div>
        <button
          onClick={() =>
            setRandomPass(generatePassword(charCounter, selectedOption))
          }
        >
          Generate the new password
        </button>

        {randomPassword !== "" && (
          <div>
            <h2>Your password is: </h2>
            <h3>{randomPassword}</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

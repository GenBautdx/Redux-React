

// Import the React and TeactDom Libreries

import React from "react";
import ReactDOM from "react-dom";


function getButtonText(){
    return 'Click on me!';
}

// Create a react componet

const App = () => {
  const buttonText = "Click Me";
  return (
    <div>
      <label clasName="label" for="name">
        Enter name:
      </label>
      <input id="name" type={"text"}></input>
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {getButtonText()}
      </button>
    </div>
  );
};
// taje the ract componet and show it one the screen

ReactDOM.render(<App />, document.querySelector("#root"));

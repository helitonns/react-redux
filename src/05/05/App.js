import React from "react";
import "./App.css";
import Photos from "./Photos";

function App() {
  const [toggle, setToggle] = React.useState(true);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <Photos />}
      
    </div>
  );
}

export default App;

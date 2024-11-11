import { useState } from "react";
import { background, redBackground } from "./App.module.css";
import "./App.css";

function App() {
  const [isRed, setisRed] = useState(false);

  const colorHandler = () => {
    setisRed(!isRed);
  };

  return (
    <>
      <h1>Cambiar color al botón</h1>
      <button
        className={`${background} ${isRed ? redBackground : ''}`}
        onClick={colorHandler}
      >
        Click
      </button>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Clock from "./components/Clock";

function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show ? <Clock /> : ""}
      <button onClick={() => setShow(!show)}>X</button>
    </>
  );
}

export default App;

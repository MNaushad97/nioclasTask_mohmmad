import { MathJaxContext } from "better-react-mathjax";
import React from "react";
import Homepage from "./components/Homepage";

function App() {
  return (
    <MathJaxContext>
      <div className="App bg-[#ecf1f4] h-screen ">
        <Homepage />
      </div>
    </MathJaxContext>
  );
}

export default App;

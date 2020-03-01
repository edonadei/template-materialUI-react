import React from "react";
import "./App.css";
import Context from "./Context";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <React.Fragment>
      <Context>
        <Welcome />
      </Context>
    </React.Fragment>
  );
}

export default App;

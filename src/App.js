import React from "react";
import "./App.css";
import {Context} from "Context";
import { PrincipalLayout } from "./components/PrincipalLayout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Context>
        <Router>
          <PrincipalLayout />
        </Router>
      </Context>
    </React.Fragment>
  );
}

export default App;

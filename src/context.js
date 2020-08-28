import React, { useState } from "react";

export const CTX = React.createContext();

export const Context = props => {
  const [value, setValue] = useState("coolValue");
  const [authenticated, setAuthenticated] = useState(true);
  return (
    <CTX.Provider value={{ value, setValue, authenticated, setAuthenticated }}>
      {props.children}
    </CTX.Provider>
  );
};
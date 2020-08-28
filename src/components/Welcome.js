import React from "react";
import { CTX } from "../Context";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";

export const Welcome = () => {
  const { authenticated, setAuthenticated } = React.useContext(CTX);
  return (
    <React.Fragment>
      <Typography>Hello world</Typography>
      <Button onClick={() => setAuthenticated(!authenticated)}>
        {authenticated ? "Disconnect" : "Connect"}
      </Button>
      {authenticated
        ? <Typography>You are authenticated</Typography>
        : <Typography>You are not authenticated</Typography>}
    </React.Fragment>
  );
};

import React from "react";
import { CTX } from "../Context";
import { Button } from "@material-ui/core";
import { Typography, Grid } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import {SimpleAppBar} from "components/SimpleAppBar"

export const PrincipalLayout = () => {
  const { authenticated, setAuthenticated } = React.useContext(CTX);
  return (
    <React.Fragment>
      <SimpleAppBar />
      <Switch>
        <Route exact path="/">
          <Grid container direction="row" justify="center" alignItems="center">
            <Typography variant="h3">Welcome !</Typography>
          </Grid>
        </Route>
        <Route exact path="/loginform">
          <Button onClick={() => setAuthenticated(!authenticated)}>
            {authenticated ? "Disconnect" : "Connect"}
          </Button>
          {authenticated ? (
            <Typography>You are authenticated</Typography>
          ) : (
            <Typography>You are not authenticated</Typography>
          )}
        </Route>
      </Switch>
    </React.Fragment>
  );
};

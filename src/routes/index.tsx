import * as React from "react";
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./home";

const Routes = () => (
  <Router>
    <Switch>
      <Redirect exact={true} from="/" to="/home" />
      <Route path="/home" component={Home} />
    </Switch>
  </Router>
);

export default Routes;

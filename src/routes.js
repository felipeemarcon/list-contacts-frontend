import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./utils/history";

// Pages
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new-contact" component={AddContact} />
      </Switch>
    </Router>
  );
}

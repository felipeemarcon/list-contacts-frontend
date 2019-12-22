import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./utils/history";

// Pages
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
import ListContacts from "./pages/ListContacts";

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new-contact" component={AddContact} />
        <Route exact path="/contacts" component={ListContacts} />
      </Switch>
    </Router>
  );
}

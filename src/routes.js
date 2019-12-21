import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new-contact" component={AddContact} />
      </Switch>
    </Router>
  );
}

import React, { Component } from "react";
import ProfilePage from "./ProfilePage";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/EveryInteract" />
          <Route exact path="/EveryInteract" component={ProfilePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

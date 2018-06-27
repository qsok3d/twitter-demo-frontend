import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import ProfilePage from './ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/EveryInteract" />
        <Route exact path="/EveryInteract" component={ProfilePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

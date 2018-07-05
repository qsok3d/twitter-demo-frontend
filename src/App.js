import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import ProfilePage from './ProfilePage';
import Header from './Header';

const Stub = ({ location }) => (
  <React.Fragment>
    <h1>
      This is
      {`${location.pathname}`}
    </h1>
  </React.Fragment>
);

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/1" />
          <Route exact path="/moments" component={Stub} />
          <Route exact path="/notifications" component={Stub} />
          <Route exact path="/messages" component={Stub} />
          <Route exact path="/about" component={Stub} />
          <Route exact path="/support" component={Stub} />
          <Route exact path="/terms" component={Stub} />
          <Route exact path="/privacy" component={Stub} />
          <Route exact path="/cookies" component={Stub} />
          <Route exact path="/advertisement" component={Stub} />
          <Route exact path="/search" component={Stub} />
          <Route path="/:userId" component={ProfilePage} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;

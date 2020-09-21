import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import SignUp from './pages/sign_up';
import Login from './pages/login';
import Otp from './pages/otp';
function App() {
  return (
    <Router>
        <Switch>
          <Route path="/sign-up">  <SignUp /> </Route>
          <Route path="/login"> <Login /> </Route>
          <Route path="/otp"> <Otp /> </Route>

          <Route path="/">  <Homepage /> </Route>
          <Route path="/homepage">  <Homepage /> </Route>
        </Switch>
    </Router>
  );
}

export default App;

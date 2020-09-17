import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from './pages/sign_up';
import Login from './pages/login';
function App() {
  return (
    <Router>
        <Switch>
          <Route path="/sign-up">  <SignUp /> </Route>
          <Route path="/login"> <Login /> </Route>
          <Route path="/"> <Login /> </Route>
        </Switch>
    </Router>
  );
}

export default App;

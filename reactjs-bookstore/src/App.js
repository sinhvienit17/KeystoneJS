import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import BookDisplay from './components/Layout/BookDisplay.js';
import Headers from './components/Layout/Headers.js';
import Signin from './components/Sign/Signin';
import Signup from './components/Sign/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Headers />
      <Switch>
        <Route exact path="/" >
          <BookDisplay />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

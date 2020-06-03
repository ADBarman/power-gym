import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/Navbar/Navbar';
import Home from './components/Pages/Home/Home';
import Pricing from './components/Pages/Pricing/Pricing';


function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
            <Home></Home>
        </Route>
        <Route  path="/pricing">
            <Pricing></Pricing>
        </Route>
        <Route path="/">
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

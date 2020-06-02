import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import About from './components/AboutUs/About';
import Workout from './components/Workout/Workout';
import Training from './components/Training/Training';
import ChooseUs from './components/ChooseUs/ChooseUs';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Navbar></Navbar>
          <Workout></Workout>
          <About></About>
          <Training></Training>
          <ChooseUs></ChooseUs>
          <Footer></Footer>
        </Route>
        <Route path="/topics">
        </Route>
        <Route path="/">
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import "./App.css";
import NavBar from "./views/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import LecturePage from "./views/LecturePage/LecturePage";
import LoginPage from "./views/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/lecture" component={LecturePage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

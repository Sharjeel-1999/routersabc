import React from "react";
import {
  BrowserRouter as Router,
  
  Route,
} from "react-router-dom";
import Home from "../comp/home";
import Users from "../comp/users";
import About from "../comp/about";
import Usersins from "../comp/usersins";



export default function Reouterabc() {
  return (
    <Router>      
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
      </Router>
  );
}

import React from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Header from "./components/Header.js";
import Container from "./components/Container.js";
import About from "./components/About.js";

const App = () => {
    
  return (
    <div className="App" >
        <Header />
        <Route exact path="/">
          <Container />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
    </div>
  );
}

export default App;
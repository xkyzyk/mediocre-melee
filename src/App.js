import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "./components/TopNav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Stream from "./components/Stream";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Stream />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;

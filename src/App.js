import React from "react";
import Home from "./components/Home";
import Nav from "./components/TopNav";
import Stream from "./components/Stream";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Stream />
    </div>
  );
}

export default App;

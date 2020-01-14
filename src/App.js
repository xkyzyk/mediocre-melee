import React from "react";
import Home from "./components/home";
import Nav from "./components/topNav";
import Stream from "./components/stream";

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

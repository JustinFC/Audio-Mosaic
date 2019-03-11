import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Source from "./components/Source";
import MediaCard from "./components/MediaCard";
import SourceList from "./components/SourceList";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SourceList />
      </div>
    );
  }
}

export default App;

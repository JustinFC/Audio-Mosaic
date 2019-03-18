import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import SourceList from "./components/SourceList";
import Typography from "@material-ui/core/Typography";

import sources from "./sources";
import targets from "./targets";
import mosaics from "./mosaics";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Typography
          variant="h2"
          color="primary"
          align="center"
          style={{ paddingTop: 20 }}
        >
          Target Audio
        </Typography>
        <SourceList sources={targets} />

        <Typography
          variant="h2"
          color="primary"
          align="center"
          style={{ paddingTop: 20 }}
        >
          Source Audio
        </Typography>
        <SourceList sources={sources} />

        <Typography
          variant="h2"
          color="primary"
          align="center"
          style={{ paddingTop: 20 }}
        >
          Audio Mosaics
        </Typography>
        <SourceList sources={mosaics} />
      </div>
    );
  }
}

export default App;

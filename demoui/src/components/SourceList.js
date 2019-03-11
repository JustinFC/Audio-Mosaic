import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import MediaCard from "./MediaCard";
import sources from "../sources";

class SourceList extends Component {
  state = {
    sources: sources
  };

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Grid container spacing={24} style={{ padding: 24 }}>
          {this.state.sources.map(currentSource => (
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <MediaCard fields={currentSource} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default SourceList;

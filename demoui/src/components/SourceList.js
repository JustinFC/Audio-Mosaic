import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import MediaCard from "./MediaCard";

class SourceList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid
          alignItems="center"
          justify="center"
          container
          spacing={24}
          style={{ padding: 24 }}
        >
          {this.props.sources.map(currentSource => (
            <Grid item xs={12} sm={6} lg={3} xl={3}>
              <MediaCard fields={currentSource} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default SourceList;

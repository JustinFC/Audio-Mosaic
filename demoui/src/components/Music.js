import React, { Component } from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import IconButton from "@material-ui/core/IconButton";

const styles = {
  playIcon: {
    height: 38,
    width: 38
  }
};

class Music extends React.Component {
  state = {
    play: false
  };
  audio = new Audio(this.props.url);

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
    this.audio.currentTime = 0;
  };

  render() {
    return (
      <div>
        {this.state.play ? (
          <IconButton aria-label="Play/pause" onClick={this.togglePlay}>
            <StopIcon className={styles.playIcon} />
          </IconButton>
        ) : (
          <IconButton aria-label="Play/pause">
            <PlayArrowIcon
              className={styles.playIcon}
              onClick={this.togglePlay}
            />
          </IconButton>
        )}
      </div>
    );
  }
}

export default Music;

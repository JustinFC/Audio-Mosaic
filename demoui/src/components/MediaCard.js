import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Music from "./Music";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  controls: {
    display: "flex",
    alignItems: "center"
  },
  playIcon: {
    height: 38,
    width: 38
  }
};

// var cardStyle = {
//   display: "block",
//   width: "30vw",
//   transitionDuration: "0.3s",
//   height: "23vw"
// };

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title="Contemplative Reptile"
          image={props.fields.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.fields.title}
          </Typography>
          <Typography component="p">{props.fields.desc}</Typography>
        </CardContent>
      </CardActionArea>
      <Music url={props.fields.audio} />
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);

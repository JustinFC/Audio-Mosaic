import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Source = props => {
  return (
    <div>
      <Card>
        <CardMedia
          style={{ height: 0, paddingTop: "56.25%" }}
          image={props.sourceImage}
          title={props.sourceTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.sourceTitle}
          </Typography>
          <Typography component="p">{props.sourceDescription}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Play
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Source;

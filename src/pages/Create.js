import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

//the same below 2 importing method, also for other components like Typography
//for example, it is that the way wihout curely braces has a little bit better performance.
//import {ButtonGroup} from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function Create() {
  return (
    <div>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a new node
      </Typography>
      <Button type="submit">submit</Button>
      <Button type="submit" color="secondary" variant="outlined">
        submit
      </Button>

      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
}

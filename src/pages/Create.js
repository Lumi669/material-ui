import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AcUnitIcon from "@mui/icons-material/AcUnit";
//the same below 2 importing method, also for other components like Typography
//for example, it is that the way wihout curely braces has a little bit better performance.
//import {ButtonGroup} from "@material-ui/core";
import container from "@material-ui/core/container";

export default function Create() {
  return (
    <container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a new node
      </Typography>
      <Button
        onClick={() => console.log("hello")}
        type="submit"
        color="secondary"
        variant="contained"
      >
        Submit
      </Button>
      <br />
      {/* icons */}
      <AcUnitIcon style={{ color: "red" }} />
      <AcUnitIcon color="secondary" fontSize="large" />
      <AcUnitIcon color="primary" fontSize="small" />
      <AcUnitIcon />
      <AcUnitIcon color="action" />
      <AcUnitIcon color="error" />
      <AcUnitIcon color="disabled" />
    </container>
  );
}

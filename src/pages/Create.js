import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
    </div>
  );
}

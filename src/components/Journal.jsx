import React from "react";
import { TextField, IconButton, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Journal.css";

const useStyles = makeStyles({
  root: {
    background: "rgb(206, 109, 109)",
    color: "white",
    height: "30px",
    width: "30px",
    margin: "2%",
  },
});

export default function Journal(props) {
  const classes = useStyles();

  function MouseOver(event) {
    event.target.style.background = "white";
  }

  return (
    <div class="journal">
      <div class="uploading-thoughts">
        <form className="your-thought" noValidate autoComplete="off">
          <TextField
            className="journal"
            id="outlined-basic"
            variant="outlined"
            multiline
            maxRows={10}
          />

          <div class="mood-bar">
            {/* will be same as selecting an interviewer in scheduler */}
            <IconButton
              className={classes.root}
              color="secondary"
              aria-label="test"
            >
              <img alt="" width="30px" src="/img/009-sad-1.png" />
            </IconButton>

            <IconButton
              className={classes.root}
              color="secondary"
              aria-label="test"
            >
              <img alt="" width="30px" src="/img/001-yawn.png" />
            </IconButton>

            <IconButton
              className={classes.root}
              color="secondary"
              aria-label="test"
            >
              <img alt="" width="30px" src="/img/013-meh.png" />
            </IconButton>

            <IconButton
              className={classes.root}
              color="secondary"
              aria-label="test"
            >
              <img alt="" width="30px" src="/img/016-happy-2.png" />
            </IconButton>

            <IconButton
              className={classes.root}
              color="secondary"
              aria-label="test"
            >
              <img alt="" width="30px" src="/img/019-crying.png" />
            </IconButton>
          </div>

          <Button
            onClick={props.onClick}
            selected={props.value}
            className="upload"
            variant="contained"
            color="default"
            disableElevation
          >
            <img alt="" width="30px" src="/img/042-email.png" />
          </Button>
        </form>
      </div>
    </div>
  );
}

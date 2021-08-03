import React, { useState } from "react";
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
  const [mood, setMood] = useState(props.mood || null);
  const [message, setMessage] = useState(props.message || null);
  const [error, setError] = useState("");

  function MouseOver(event) {
    event.target.style.background = "white";
  }

  function validate() {
    if (message === "") {
      setError("Student name cannot be blank");
      return;
    }

    setError("");
    props.onSave(mood, message);
  }

  return (
    <div class="container">
      <div class="uploading-thoughts">
        <form className="your-thought" noValidate autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <TextField
            className="journal"
            onChange={(event) => setMessage(event.target.value)}
            id="outlined-basic"
            variant="outlined"
            multiline
            maxRows={10}
          />

          <div class="mood-bar" onChange={setMood}>
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
            onClick={() => validate()}
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

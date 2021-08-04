import React, { useState } from "react";
import { TextField, IconButton, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Journal.css";
import axios from "axios";
import { Redirect } from "react-router";

const useStyles = makeStyles({
  root: {
    background: "rgb(206, 109, 109)",
    color: "white",
    height: "30px",
    width: "30px",
    margin: "2%",
  },
});

export default function Journal() {

  const classes = useStyles();

  function MouseOver(event) {
    event.target.style.background = "white";
  }

  const[messageState, setmessageState] = useState('');
  const [emoji, setEmoji] = useState("https://i.imgur.com/WVNoRDr.png");


  function handleMessage(e){
    e.preventDefault();
    setmessageState(e.target.value)  
  };

  function handleSubmit(e){ 
     const data = {
      messages: messageState,
      mood_icon_url: emoji,
    }
    console.log("-------", data)
    axios
      .post("/Journal", data)
      .then((res) => console.log(res))
      .then(Redirect("/messages"))
      .catch((err) => console.log(err));
  };

  return (
    <div class="journal">
      <div class="uploading-thoughts">
        <form
        onSubmit={handleSubmit}
          className="your-thought"
          noValidate
          autoComplete="off"
        >
          <TextField
            onChange={handleMessage}
            className="journal"
            id="outlined-basic"
            variant="outlined"
            multiline
            maxRows={10}
          />

          <div class="mood-bar">
            <IconButton
              onClick={() => setEmoji("https://imgur.com/tdJnqXF")}
              className={classes.root}
              color="secondary"
              aria-label="test"
            >
              <img alt="" width="30px" src="/img/009-sad-1.png" />
            </IconButton>

            <IconButton
              onClick={() => setEmoji("https://imgur.com/2G6Cc0q")}
              className={classes.root}
              color="secondary"
              aria-label="test"
            >
              <img alt="" width="30px" src="/img/001-yawn.png" />
            </IconButton>

            <IconButton
              onClick={() => setEmoji("https://imgur.com/tdJnqXF")}
              className={classes.root}
              color="secondary"
              aria-label="test"
            >
              <img alt="" width="30px" src="/img/013-meh.png" />
            </IconButton>

            <IconButton
              onClick={() => setEmoji("https://imgur.com/WVNoRDr")}
              className={classes.root}
              color="secondary"
              aria-label="test"
            >
              <img alt="" width="30px" src="/img/016-happy-2.png" />
            </IconButton>

            <IconButton
              onClick={() => setEmoji("https://imgur.com/efuce6E")}
              className={classes.root}
              color="secondary"
              aria-label="test"
            >
              <img alt="" width="30px" src="/img/019-crying.png" />
            </IconButton>
          </div>

          <Button
            onClick={handleSubmit}
            className="upload"
            disableElevation
          >
            <img alt="" width="30px" src="/img/042-email.png" />
          </Button>
        </form>
      </div>
    </div>
  );
}

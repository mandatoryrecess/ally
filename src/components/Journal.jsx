import React, { useState, useEffect } from "react";
import { TextField, IconButton, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Journal.css";
import axios from "axios";

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
  const [emoji, setEmoji] = React.useState("https://i.imgur.com/WVNoRDr.png");
  // const [post, setPost] = React.useState(null);

  const classes = useStyles();

  function MouseOver(event) {
    event.target.style.background = "white";
  }

  // useEffect(() => {
  //   const messages = {messages: "HELLO", mood_icon_url: "https://i.imgur.com/2G6Cc0q.png"}
  //   axios.post('/messages', {messages})
  //   .then(function(response){
  //     console.log(response)
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  // }, []);

  const messageState = {
    messages: "",
    emoji: "",
  };

  const[state, setState] = React.useState(messageState);
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      messages: this.state.messages,
      mood_icon_url: this.state.emoji,
    };
    axios
      .post("/messages", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const onMessageHandleChange = (event) => {
    this.setState({
      messages: event.target.value,
    });
  };

 const onEmojiHandleChange = (event) => {
    this.setState({
      mood_icon_url: "https://i.imgur.com/WVNoRDr.png",
    });
  };

  return (
    <div class="journal">
      <div class="uploading-thoughts">
        <form
          className="your-thought"
          noValidate
          autoComplete="off"
        >
          <TextField
            value={this.state.messages}
            onChange={this.onMessageHandleChange}
            className="journal"
            id="outlined-basic"
            variant="outlined"
            multiline
            maxRows={10}
          />

          <div class="mood-bar">
            <IconButton
              value={this.state.emoji}
              onChange={this.onEmojiHandleChange}
              className={classes.root}
              color="secondary"
              aria-label="test"
            >
              <img alt="" width="30px" src="/img/009-sad-1.png" />
            </IconButton>

            <IconButton
              onClick={setEmoji}
              className={classes.root}
              color="secondary"
              aria-label="test"
            >
              <img alt="" width="30px" src="/img/001-yawn.png" />
            </IconButton>

            <IconButton
              onClick={setEmoji}
              className={classes.root}
              color="secondary"
              aria-label="test"
            >
              <img alt="" width="30px" src="/img/013-meh.png" />
            </IconButton>

            <IconButton
              onClick={setEmoji}
              className={classes.root}
              color="secondary"
              aria-label="test"
            >
              <img alt="" width="30px" src="/img/016-happy-2.png" />
            </IconButton>

            <IconButton
              onClick={setEmoji}
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

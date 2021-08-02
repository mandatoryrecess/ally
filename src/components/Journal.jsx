import React from "react";
import { TextField, IconButton } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import AlbumIcon from "@material-ui/icons/Album";
import { makeStyles } from "@material-ui/core/styles";
import "./Journal.css";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "35px",
    width: "35px",
    margin: "2%",
  },
});

export default function Journal(props) {
  const classes = useStyles();

  function MouseOver(event) {
    event.target.style.background = "linear-gradient(45deg, #FE6B8B 50%, #FF8E53 100%)";
  }

  return (
    <div class="container">
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
              onMouseOver={MouseOver}
            >
              <AlbumIcon />
            </IconButton>

            <IconButton
              className={classes.root}
              color="secondary"
              aria-label="test"
              onMouseOver={MouseOver}
            >
              <AlbumIcon />
            </IconButton>

            <IconButton
              className={classes.root}
              color="secondary"
              aria-label="test"
              onMouseOver={MouseOver}
            >
              <AlbumIcon />
            </IconButton>

            <IconButton
              className={classes.root}
              color="secondary"
              aria-label="test"
              onMouseOver={MouseOver}
            >
              <AlbumIcon />
            </IconButton>

            <IconButton
              className={classes.root}
              color="secondary"
              aria-label="test"
              onMouseOver={MouseOver}
            >
              <AlbumIcon />
            </IconButton>
          </div>

          <IconButton color="secondary" aria-label="cloud-upload-icon">
            <CloudUploadIcon />
          </IconButton>
        </form>

        {/* add mood icons */}
      </div>
    </div>
  );
}

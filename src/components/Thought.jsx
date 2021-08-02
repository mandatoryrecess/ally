import React from "react";
import { TextField, Button, IconButton } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import "./Thought.css";

export default function Thought(props) {
  return (
    <div class="uploading-thoughts">
      <form className="your-thought" noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          variant="outlined"
          multiline
          maxRows={5}
        />
      </form>
      <IconButton color="secondary" aria-label="cloud-upload-icon">
        <CloudUploadIcon />
      </IconButton>
    </div>
  );
}

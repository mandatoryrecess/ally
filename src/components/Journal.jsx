import React from "react";
import { TextField, IconButton } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import "./Journal.css";

export default function Journal(props) {
  return (
    <div class="uploading-thoughts">
      <form className="your-thought" noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          variant="outlined"
          multiline
          maxRows={10}
        />
      </form>
      <IconButton color="secondary" aria-label="cloud-upload-icon">
        <CloudUploadIcon />
      </IconButton>

      {/* add mood icons */}
      
    </div>
  );
}

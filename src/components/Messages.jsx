import axios from "axios";
import React from "react";

const api_call = "/messages";

export default function Messages(props) {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(api_call).then((response) => {
      setPost(response.data);
    });
  }, []);


  if (!post) return null;

  const notes = post.map((messageObj) => {
    return messageObj.messages;
    
  })

  const images = post.map((messageObj) => {
    return messageObj.mood_icon_url;
  })

  return (
    <div className="Messages">
      <div class="container">
        <h1 class="font-weight-light">Messages</h1>

      <h2>Notes</h2>  {notes}
      <h2>images</h2>  {images}

      </div>
    </div>
  );
}

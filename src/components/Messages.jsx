import axios from "axios";
import React from "react";
import "./Messages.css";

const api_call = "/messages";

export default function Messages(props) {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(api_call).then((response) => {
      setPost(response.data);
    });
  }, []);
  
  if (!post) return null;

  // const notes = post.map((messageObj) => {
  //   return messageObj.messages;
    
  // })

  // const images = post.map((messageObj) => {
  //   return messageObj.mood_icon_url;
  // })

  return (
    <div className="Messages">
      <div class="container">
        <h1 class="font-weight-light">Messages</h1>
        <div class="archive">
          {post.map((messageObj) => {
            let returnArray = [];
            const notes = messageObj.messages;
            const image = messageObj.mood_icon_url;
            returnArray.push(notes, image);
            return returnArray;
          })}
        </div>
      </div>
    </div>
  );
}

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

  const notes = post.map((messageObj) => {
    return (<div>
            <img width="30px" src={messageObj.mood_icon_url} />
            <span> {messageObj.messages }</span>
            </div>
      );
  })


  return (
    <div className="Messages">
      <div class="container">
      <h2>Notes</h2>{notes}
      </div>
      
    </div>
  );

  

}

import axios from "axios";
import React from "react";
import "./Messages.css";
import "./Collapsible.css";
import  Navigation  from "./Navigation";

import { Link, withRouter } from "react-router-dom";

import Collapsible from "react-collapsible";

const api_call = "/api/messages";

function Messages(props) {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(api_call).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  const notes = post.map((messageObj) => {
    let imageURL = messageObj.mood_icon_url;
    let messageLength = messageObj.messages;
    if (messageLength.length > 30)
      messageLength = messageLength.substring(0, 30) + "...";

    return (
      <div class="CustomTriggerCSS">
        <Collapsible trigger={messageLength}>
          <span>
            {" "}
            <img alt="" width="30px" src={imageURL} /> <br></br>
            {messageObj.messages}
          </span>
        </Collapsible>
      </div>
    );
  });

  return (
    <div className="messages">
       <Navigation />
      {/* <Link to="/journal" class="pen">
        <img type="image/png" width="30px" alt="" src="/img/006-compose.png" />
      </Link> */}
      <div class="container">
        <Link to="/journal" class="pen">
          <img
            type="image/png"
            width="30px"
            alt=""
            src="/img/006-compose.png"
          />
        </Link>
        {notes}
      </div>
    </div>
  );
}
export default withRouter(Messages);

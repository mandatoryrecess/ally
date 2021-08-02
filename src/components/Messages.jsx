import axios from "axios";
import React from "react";
import "./Messages.css";
import { Link, withRouter } from "react-router-dom";

import Collapsible from "react-collapsible";

const api_call = "/messages";

function Messages(props) {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(api_call).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  const notes = post.map((messageObj) => {
    let messageLength = messageObj.messages;
    if (messageLength.length > 30)
      messageLength = messageLength.substring(0, 30) + "...";

    return (
      <div>
        <Collapsible trigger={messageLength}>
          <img width="30px" src={messageObj.mood_icon_url} />
          <span> {messageObj.messages}</span>
        </Collapsible>
      </div>
    );
  });

  return (
    <div className="Messages">
      <div class="container">{notes}</div>
      <div>
        <Link to="/Journal" class="container pen fas fa-pen-alt"></Link>
      </div>
    </div>
  );
}
export default withRouter(Messages);

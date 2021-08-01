import axios from "axios";
import React from "react";

const baseURL = "http://localhost:3002/messages";
// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function Messages() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response)
    });
  }, []);

  if (!post) return null;

  return (
    <div className="Messages">
      <div class="container">
        <h1 class="font-weight-light">Messages</h1>
        <h3>{post.messages}</h3>
        <p>{post.mood_icon_url}</p>
      </div>
    </div>
  );
}

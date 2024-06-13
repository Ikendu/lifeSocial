import { useEffect, useState } from "react";
import axios from "axios";
// import { Posts } from "../../dumData";
import "./feed.css";
import Post from "./post/Post";
import Share from "./share/Share";

function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = username
        ? await axios.get(`/posts/profile/${username}/`)
        : await axios.get(`/posts/timeline/665afa7a892a926780894474/`);
      console.log(`POSTS`, resp);
      setPosts(resp?.data);
    };
    fetchData();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => (
          <Post key={post?._id} post={post} />
        ))}
      </div>
    </div>
  );
}
export default Feed;

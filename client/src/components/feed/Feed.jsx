import { useEffect, useState } from "react";
import axios from "axios";
import { Posts } from "../../dumData";
import "./feed.css";
import Post from "./post/Post";
import Share from "./share/Share";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(`/posts/timeline/665afb22892a926780894478/`);
      console.log(`POSTS`, resp);
    };
    fetchData();
  }, []);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => (
          <Post key={post?.id} post={post} />
        ))}
      </div>
    </div>
  );
}
export default Feed;

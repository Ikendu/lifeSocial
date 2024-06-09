import { posts } from "../../dumData";
import "./feed.css";
import Post from "./post/Post";
import Share from "./share/Share";

function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => (
          <div>
            <Post key={post?.id} post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Feed;

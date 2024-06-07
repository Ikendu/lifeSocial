import "./feed.css";
import Post from "./post/Post";
import Share from "./share/Share";

function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
export default Feed;

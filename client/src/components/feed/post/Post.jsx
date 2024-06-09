import { MoreVert } from "@material-ui/icons";
import "./post.css";
import f from "../../../assets/persons/f.jpg";
import g from "../../../assets/persons/g.jpg";
import love from "../../../assets/love.jpg";
import like from "../../../assets/like.jpg";

function Post({ post }) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="topLeft">
            <img src={f} alt="" className="postProfileImg" />
            <span className="postUserName">Younglife</span>
            <span className="postDate">{post?.date} mins age</span>
          </div>
          <div className="topRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postCenterText">{post?.desc}</span>
          <img src={post?.photos} alt="post image" className="postCenterImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLetf">
            <img src={love} alt="love icon" className="likeIcon" />
            <img src={like} alt="like icon" className="likeIcon" />
            <span className="postLikeCounter">
              {post.like} people like this
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postComentText">{post?.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Post;

import { MoreVert } from "@material-ui/icons";
import { useState } from "react";
import "./post.css";
import f from "../../../assets/persons/f.jpg";
import g from "../../../assets/persons/g.jpg";
import love from "../../../assets/love.jpg";
import like from "../../../assets/like.jpg";
import { Users } from "../../../dumData";

function Post({ post }) {
  const [isLiked, setIsliked] = useState(false);
  const [likes, setLikes] = useState(post.like);

  const handleLikeButton = () => {
    isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
    setIsliked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="topLeft">
            <img
              src={
                Users.filter((user) => user.id === post.userId)?.[0]
                  ?.profilePicture
              }
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">
              {Users.filter((user) => user.id === post.userId)[0]?.username}
            </span>
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
            <img
              src={love}
              onClick={handleLikeButton}
              alt="love icon"
              className="likeIcon"
            />
            <img
              src={like}
              onClick={handleLikeButton}
              alt="like icon"
              className="likeIcon"
            />
            <span className="postLikeCounter">{likes} people like this</span>
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

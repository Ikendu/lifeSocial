import { MoreVert } from "@material-ui/icons";
import "./post.css";
import f from "../../../assets/persons/f.jpg";

function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="topLeft">
            <img src={f} alt="" className="postProfileImg" />
            <span className="postUserName">Younglife</span>
            <span className="postDate">5 mins age</span>
          </div>
          <div className="topRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter"></div>
        <div className="postBottom"></div>
      </div>
    </div>
  );
}
export default Post;

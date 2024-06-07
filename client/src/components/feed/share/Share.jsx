import { PermMedia } from "@material-ui/icons";
import e from "../../../assets/persons/e.jpg";
import "./share.css";

function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={e} alt="" className="shareProfileImg" />
          <input
            type="text"
            className="shareInput"
            placeholder="What is on your mind"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOptions">
              <PermMedia className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Share;

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
        <div className="shareBottom"></div>
      </div>
    </div>
  );
}
export default Share;

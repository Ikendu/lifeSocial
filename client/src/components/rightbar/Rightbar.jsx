import gift from "../../assets/gift.png";
import a3 from "../../assets/posts/a3.jpg";

import "./rightbar.css";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src={gift} alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Lola Ama</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>
        <img src={a3} alt="rightbar ad" className="rightbarAd" />
      </div>
    </div>
  );
}
export default Rightbar;

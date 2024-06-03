import "./topbar.css";
function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div className="logo"></div>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          🔎
          <input
            placeholder="search for friends or posts"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight"></div>
    </div>
  );
}
export default Topbar;

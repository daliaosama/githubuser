import "./UserData.css";
import bitmap from "../../../public/images/Bitmap.png";
import location from "../../../public/images/003-pin.svg";
import twitter from "../../../public/images/004-twitter.svg";
import url from "../../../public/images/002-url.svg"
import office from "../../../public/images/001-office-building.svg"
import { ThemeContext } from "../../App";
import { useContext } from "react";
function UserData() {
  const passed=useContext(ThemeContext)

  return (
    <div id="user" className={passed.theme +"div"}>
      <div id="left">
        <img src={bitmap} />
      </div>
      <div id="right">
        <div id="top">
          <div id="About">
            <div id="info"><h3>The Octocat</h3>
            <label id="username">@Octocat</label>
            </div>
              <div id="time"><h5 className={passed.theme +"head"}>Joined 25 jan 2011</h5></div>
          </div>
          
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
               Donec odio. Quisque volutpat mattis eros.</p>
        </div>
        <div id="middle" className={passed.theme+"middle"}>
          <div className="info">
            <label  className={passed.theme+"lab2"}>Repos</label>
            <label className="lab">8</label>
          </div>
          <div className="info">
            <label className={passed.theme+"lab2"}>Followers</label>
            <label className="lab">3938</label>
          </div>
          <div className="info">
            <label  className={passed.theme+"lab2"}>folowing</label>
            <label className="lab">9</label>
          </div>
        </div>
        <div id="bottom">
          <div className="links">
            <img src={location}  />
            <label className={passed.theme+"lab3"}>San Francisco</label>
          </div>
          <div className="links">
            <img src={twitter} />
            <label className={passed.theme+"lab3"}>Not Available</label>
          </div>
          <div className="links">
            <img src={url}/>
            <a href="https://github.blog" className={passed.theme+"linked"}>https://github.blog </a>
          </div>
          <div className="links">
            <img src={office}  />
            <label className={passed.theme+"lab3"}>@github</label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserData;

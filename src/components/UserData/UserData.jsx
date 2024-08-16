/* eslint-disable react/prop-types */
import "./UserData.css";
import location from "../../../public/images/003-pin.svg";
import twitter from "../../../public/images/004-twitter.svg";
import url from "../../../public/images/002-url.svg"
import office from "../../../public/images/001-office-building.svg"
import { ThemeContext } from "../../App";
import { useContext} from "react";

function UserData({userData}) {
  const passed=useContext(ThemeContext)
  const formatJoinDate = (dateString) => {
    const date = new Date(dateString);
  
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' }); // e.g., "Nov"
    const year = date.getFullYear();
  
    return `Joined at ${day} ${month} ${year}`;
  };
  return (
    <div id="user" className={passed.theme +"div"}>
     
       
          <div id="left">
          <img src={userData.avatar_url}  /> 
          </div>
          <div id="right">
            <div id="top">
              <div id="About">
                <div id="info"><h3>{userData.name }</h3>
               
                <label id="username">{userData.login}</label>
                </div>
                  <div id="time"><h5 className={passed.theme +"head"}>{formatJoinDate(userData?.created_at)}</h5></div>
              </div>
              
              <p>{userData.bio}</p>
            </div>
            <div id="middle" className={passed.theme+"middle"}>
              <div className="info">
                <label  className={passed.theme+"lab2"}>Repos</label>
                <label className="lab">{userData.public_repos?userData.public_repos:0}</label>
              </div>
              <div className="info">
                <label className={passed.theme+"lab2"}>Followers</label>
                <label className="lab">{userData.followers?userData.followers:0}</label>
              </div>
              <div className="info">
                <label  className={passed.theme+"lab2"}>folowing</label>
                <label className="lab">{userData.following?userData.following:0}</label>
              </div>
            </div>
            <div id="bottom">
              <div className="links">
                <img src={location}  />
                <label className={passed.theme+"lab3"}>{userData.location?userData.location:"Not Available"}</label>
              </div>
              <div className="links">
                <img src={twitter} />
                <label className={passed.theme+"lab3"}>{userData.twitter_username?userData.twitter_username:"Not Available"}</label>
              </div>
              <div className="links">
                <img src={url}/>
                <a href={userData.blog} className={passed.theme+"linked"}>{userData.blog?userData.blog:"Not Available"}</a>
              </div>
              <div className="links">
                <img src={office}  />
                <label className={passed.theme+"lab3"}>{userData.company?userData.company:"Not Available"}</label>
              </div>
            </div>
          </div>
        
     
     
    </div>
  );
}
export default UserData;


import './Search.css'
import search from '../../../public/images/Combined Shape.svg'
import { ThemeContext } from "../../App";
import { useContext ,useEffect,useState} from "react";
import UserData from '../UserData/UserData';
import bitmap from "../../../public/images/Bitmap.png";  
function Search(){
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false); 
    const [searchQuery, setSearchQuery] = useState('');
    const [userData, setUserData] = useState(
        {login:"@octocat",
         name:"The Octocat",
         avatar_url:bitmap,
         bio:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
         public_repos:8,
         followers:3938,
         following:9,
         location:"San Francisco",
         twitter_username:"Not Available",
         company:"@github",
         created_at:"Joined 25 Jan 2011",
         blog:"https://github.blog"
        }
    );
  
console.log(userData)
useEffect(()=>{
    if (searchQuery) {
       
    function callApi(){
    fetch(`https://api.github.com/users/${searchQuery}`).then((res)=>{
        if (!res.ok) {
            throw new Error('No Results');
          }
        return res.json()
       
    }).then((final)=>{
        console.log(final)
          setUserData(final)
          setError(false);
    }
   
    
).catch(() => {
    setError(true);
        setUserData(userData)
    })
   
    }
    callApi()
}},[searchQuery])
    function handleonSubmit(event){
        event.preventDefault();
        setSearchQuery(inputValue);
      
           }
    function onHandleChange(event){
        setError(false);
       setInputValue(event.target.value)
    }
    const passed=useContext(ThemeContext)
    return(
        <>
<form id="search"  className={passed.theme +"form"} onSubmit={handleonSubmit}>
        <div id="inputsearch">
        <img src={search}/>
        <input type="text"  placeholder="  Search Github username..." 
        className={passed.theme +"holder"} name="search" 
        value={inputValue} onChange={onHandleChange}
     
         />
      
         {console.log(userData.name )}
        </div>
        {error && (
          <span className="error-message">No results</span>
        )}
        <button type="submit">
            Search
        </button>
        
       </form>
      
       {userData && <UserData userData={userData}></UserData>}
        </>
       
            
        
    )
}
export default Search
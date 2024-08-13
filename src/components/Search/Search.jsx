import './Search.css'
import search from '../../../public/images/Combined Shape.svg'
import { ThemeContext } from "../../App";
import { useContext } from "react";
function Search(){
    const passed=useContext(ThemeContext)
    return(
       <div id="search"  className={passed.theme +"div"}>
        <div id="inputsearch">
        <img src={search}/>
        <input type="text"  placeholder="  Search Github username..." className={passed.theme +"holder"} />
        </div>
       
        <button>
            Search
        </button>
       </div>
            
        
    )
}
export default Search
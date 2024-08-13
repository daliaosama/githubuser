import UserData from '../UserData/UserData';
import Search from './../Search/Search';
import './Main.css'
import { ThemeContext } from "../../App";
import { useContext } from "react";
function Main(){
    const passed=useContext(ThemeContext)
    return (
        <div id ="mid"className={passed.theme +"mid"}>
            <Search></Search>
            <UserData></UserData>
        </div>
    )
}
export default Main;
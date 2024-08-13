import "./Toggle.css";
import sun from '../../../public/images/002-sun.svg'
import { ThemeContext } from "../../App";
import { useContext ,useState} from "react";
import moon from "../../../public/images/moon.svg";
function Toggle() {
  const theme = useContext(ThemeContext);
  const [imageSrc, setImageSrc] = useState(moon);
  const [value,setValue]=useState("dark")
  function onHandleChange(event) {
   let newValue;
    if (event.target.checked== false) {
      newValue = "light";
     
    } else {
      newValue = "dark";
     
    }
    theme.setTheme(newValue);
    }
    function change(){
      if (imageSrc==moon) {
        setImageSrc(sun)
        setValue("light")
      }
      else{
        setImageSrc(moon)
        setValue("dark")
      }
    }
  return (
    <div id="header"  >
      <h1 className={theme.theme+"Header"}>devfinder</h1>
      <div id="toogle">
        <label className={theme.theme+"label"} id="lab1" htmlFor="checkbox">{value} <img src={imageSrc} alt="" /></label>
        <input type="checkbox" onClick={change} onChange={onHandleChange} id="checkbox" ></input>
      </div>
    </div>
  );
}
export default Toggle;

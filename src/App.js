
import { useEffect, useState } from "react";
import { SketchPicker, ChromePicker, GithubPicker } from "react-color";
import "./styles.css";
var { Alpha } = require("react-color/lib/components/common");

export default function App() {
  const [currentColor, setCurrentColor] = useState("#D0021B");
  const appStyle = {
    height: "80vh",
    width:"150vh",
    color: "white",
    outline:'1px solid black',
    right:"559px",
    marginLeft:"20px",
    display:"inline-block",
    backgroundColor: currentColor.hex,
    transition: "ease all 300ms"
  };

  const mystyles={
    marginLeft:"10px",
    padding: "2px",
     width: "110px",
     autoComplete:"off"
  }

  const styy={
    marginLeft:"640px",
    marginTop:"1px",
    cursor: "default", 
    display: "inline-block", 
    width: "90px",
    color:"black"
  }

  const handleChangeComplete = (color) => {
    setCurrentColor(color);
  };

 const palete={
  marginLeft:"650px",
  
  cursor: "default", 
 }

const menu={
  marginLeft:"12px",
  
}
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return (
    <>
    <h1>convax </h1>
    <div className="col" style={{backgroundColor:'#D6CDCE', padding:"12px", marginLeft:"20px",
 height: "5vh",
    width:"146vh",}}><span style={menu}>File</span>
    <span style={menu}>Edit</span>
    <span style={menu}>view</span>
    <span style={menu}>Help</span>
    <div className="Row">
      <span className="Text" style={styy}>Background</span>
      <select className="Select" style={mystyles}>
        <option ></option>
        <option >Color</option>
         <option value="Texture">Texture</option>
        <option value="Equirectangular">Equirect</option>
        </select> 
      
      <input className="Color" style={{width: "32px", height: "16px", border: "1px", padding: "2px", backgroundColor:currentColor.hex , marginLeft: "8px", autocomplete:"off", type:"color"}}
           onClick={handleClick}/></div>
    </div>
    <div className="App" style={appStyle}>
    <img className="mg" src="https://svgsilh.com/svg/150791.svg" alt="digit" style={{height:"150px", margin:"20px"}}/>
      {/*  show elements on click */}
      {isShown && (
        <div style={palete}>
         <SketchPicker 
        color={currentColor}
        onChangeComplete={handleChangeComplete}
      />

        </div>
      )}

      {/* show component on click */}
      {isShown}
  
    </div>
    
    </>
  );
  }
 
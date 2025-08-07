import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import CreatePage from "./Components/CreatePage"
import Login from "./Components/Login.jsx";
import { useState, useEffect } from "react";
function App() {
const [time,seTime] = useState("day");
    const [color,setColor] = useState("Blue");
    const changeTime = () => {
        if(time === "day"){
            setColor("Blue");
        }else{
            setColor("DarkBlue");
        }
    };
useEffect(()=>{
        changeTime();
    },[time]);
  return (

   <div style={{height:"100vh",width:"100vw",backgroundColor:color}}>
     <button onClick={()=> seTime(time === "day"? "night":"day")}>{time}</button>
<Navbar/>
  <Routes>
    <Route path = "/" element = {<Home/>} />
    <Route path = "/create" element = {<CreatePage/>} />
    <Route path = "/login" element = {<Login/>} />
  </Routes>

   </div>
    
  )
}




export default App

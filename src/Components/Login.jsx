import React from 'react'
import {useState} from 'react';
import axios from 'axios';
function Login() {



const [data,setdata] = useState({name:"",price:"",image:""} );
const [msg,setmsg] = useState("");
const change = (e)=>{
  setdata({...data,[e.target.name]:e.target.value});
}
const setsubmit = async (e)=>{
    e.preventDefault();
   try {
     const mes =await axios.post("https://backend-dukkan.vercel.app/api/products",data);
    setmsg(mes.data.message);
    setdata({name:"",price:"",image:""});
   } catch (error) {
    console.log(error);
    setmsg("Bhai tune product add nhi kiya");
   }
   
}
  return (
    <div style={{margin:"30px",backgroundColor:"Red",height:"450px",width:"400px", display:"flex", flexDirection:"column", gap:"10px", justifyItems:"space-between",justifyContent:"center",alignItems:"center" ,position:"absolute",top:"120px",left:"505px" , borderRadius:"5%"}}>
      <input type  = "text" placeholder = "Name" name  = "name" style  = {{height:"40px",width:"80%"}}  value ={data.name} onChange={change} />
      <input type  = "number" placeholder='Price' name = "price" style  = {{height:"40px",width:"80%"}} value ={data.price} onChange={change}/>
      <input type = "text" placeholder='Enter id' name = "image" style  = {{height:"40px",width:"80%"}} value ={data.image} onChange={change}/>
      <button onClick={setsubmit} style  = {{marginTop:"20px",textAlign:"center",borderRadius:"10px", backgroundColor:"Green" ,fontSize:"28px",cursor:"pointer"}}>Submit</button>
    </div>
  )
}

export default Login;

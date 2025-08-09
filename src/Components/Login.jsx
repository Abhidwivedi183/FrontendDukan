
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login() {
  const [data, setData] = useState({ name: "", price: "", image: "" });
  const [msg, setMsg] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const setsubmit = async (e) => {
    e.preventDefault();
    try {
      const mes = await axios.post("https://backenddukkan.onrender.com/api/products", data);
      setMsg(mes.data.message);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
      setData({ name: "", price: "", image: "" });
    } catch (error) {
      console.log(error);
      setMsg("Bhai tune product add nhi kiya");
    }
  };

  return (
    <div>
      <div className="login-card">
        <input type="text" placeholder="Name" name="name" value={data.name} onChange={change} />
        <input type="number" placeholder="Price" name="price" value={data.price} onChange={change} />
        <input type="text" placeholder="Enter id" name="image" value={data.image} onChange={change} />
        <button onClick={setsubmit}>Submit</button>
      </div>
      {showPopup && <div className="success-popup">✅ {msg}</div>}
    </div>
  );
}

export default Login;



import React from 'react'
import {Link} from 'react-router-dom';
import { useState ,useEffect} from 'react';
function Navbar() {
    
    
  return (
    <nav style={{ backgroundColor: "DarkBlue",justifyContent:"space-between" ,display:"flex" ,fontSize:"20px",background:"Red" }}>
      <Link to="/" >Home</Link>
    <Link to="/create">CreatePage</Link>
    <Link to="/login" >Login</Link>
    </nav>
  );
}


export default Navbar;

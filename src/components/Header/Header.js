import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Header.css";
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
   
       <Link to="/">
            <h1 className='Header-logo'><i 
      style={{color: "var(--gray-blue)"}} 
      className="fas fa-sign-hanging">
      </i></h1>
       </Link>
      <h1>Fullstack360</h1>
      <form onSubmit="console.log('You clicked submit.'); return false">
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Header;
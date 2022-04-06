import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <h1 className='Header-logo'><i class="fas fa-sign-hanging"></i></h1>
      <h1>Fullstack360</h1>
      <form onSubmit="console.log('You clicked submit.'); return false">
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Header;

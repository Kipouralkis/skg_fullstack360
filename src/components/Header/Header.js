import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <h1>Welcome to my page</h1>
      <h2>Start editing to see some magic happen!</h2>
      <form onsubmit="console.log('You clicked submit.'); return false">
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Header;

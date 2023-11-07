import React from "react";
import { SearchBar } from '../SearchBar/Search';
import "./Navbar.css";

const Navbar = () => {

  return (
    <div className="Navbar">
      <div className="links">
        <SearchBar/>
      </div>
    </div>
  );
};

export default Navbar;
import React from "react";
import Parseable from '../assets/parseable.svg'
import "../styles/Header.css";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={Parseable}/>
      <Link to="/stream" className="nav-link">Stream</Link>
        <Link to="/chart" className="nav-link">Chart</Link>
        <Link to="/table" className="nav-link">Table</Link>
    </header>
  );
};

export default Header;
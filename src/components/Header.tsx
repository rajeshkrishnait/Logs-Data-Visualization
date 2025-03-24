import React from "react";
import Parseable from '../assets/parseable.svg'
import "../styles/Header.css";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import Person2Icon from '@mui/icons-material/Person2';
import InfoIcon from '@mui/icons-material/Info';
const Header: React.FC = () => {
  return (
    <header className="header">
        <img src={Parseable}/>
        <Link to="/stream" className="nav-link">Log Stream</Link>
        <Link to="/chart" className="nav-link">Log Visualization</Link>
        <Link to="/table" className="nav-link">Log Table</Link>
        <div className='bottomAlign'>
            <LogoutIcon/>
            <Person2Icon/>
            <InfoIcon/>
        </div>
    </header>
  );
};

export default Header;
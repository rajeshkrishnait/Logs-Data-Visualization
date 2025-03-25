import React from "react";
import { Link } from "react-router-dom";
import Parseable from "../assets/parseable.svg";
import LogoutIcon from "@mui/icons-material/Logout";
import Person2Icon from "@mui/icons-material/Person2";
import InfoIcon from "@mui/icons-material/Info";
import { Switch } from "@mui/material";
import { useTheme } from "../Context/ThemeContext";
import "../styles/Header.css";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <img src={Parseable} />
      <Link to="/Logs-Data-Visualization" className="nav-link">Home</Link>
      <Link to="/Logs-Data-Visualization/table" className="nav-link">Log Table</Link>
      <Link to="/Logs-Data-Visualization/stream" className="nav-link">Log Stream</Link>
      <Link to="/Logs-Data-Visualization/chart" className="nav-link">Log Visualization</Link>


      <div className="bottomAlign">
      <Switch
        checked={theme === "dark"}
        onChange={toggleTheme}
        sx={{
          "& .MuiSwitch-switchBase.Mui-checked": {
            color: "white", // Change thumb color when ON (Dark Mode)
          },
          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "white", // Change track color when ON (Dark Mode)
          },
          "& .MuiSwitch-track": {
            backgroundColor: "black", // Default track color when OFF (Light Mode)
          }
        }}
      />          
      <LogoutIcon />
        <Person2Icon />
        <InfoIcon />
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import { IconButton, Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./css/Header.css";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AppsIcon from "@material-ui/icons/Apps";
import SettingsIcon from "@material-ui/icons/Settings";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <ReorderIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt="Logo"
        />
      </div>
      <div className="header__middle">
        <div className="search__mail">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search or enter an email" />
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
      <div className="header__right">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.wecreateforyou.in%2Fwp-content%2Fuploads%2F2019%2F09%2Fvector-art-scaled.jpeg&imgrefurl=https%3A%2F%2Fwww.wecreateforyou.in%2Fproduct%2Fvector-art%2F&tbnid=3QxMatMUzyGMUM&vet=12ahUKEwjw1sLL2_bzAhU8L7cAHQNqCcEQMygUegUIARD3AQ..i&docid=0H_agDtGAaUxHM&w=724&h=1024&q=vector%20images&ved=2ahUKEwjw1sLL2_bzAhU8L7cAHQNqCcEQMygUegUIARD3AQ"></Avatar>
      </div>
    </div>
  );
}

export default Header;

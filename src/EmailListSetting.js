import React from "react";
import { IconButton } from "@material-ui/core";
import CheckBoxOutlineBlankOutlinedIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./css/EmailList.css";

function EmailListSetting() {
  return (
    <div className="emaillist__settings">
      <div className="emaillist__left">
        <IconButton>
          <CheckBoxOutlineBlankOutlinedIcon />
        </IconButton>
        <IconButton>
          <ArrowDropDownOutlinedIcon />
        </IconButton>
        <IconButton>
          <RefreshIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>

      <div className="emaillist__right">
        <p>1-50 of 10,22 </p>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default EmailListSetting;

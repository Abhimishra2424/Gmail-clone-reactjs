import React from "react";
import CheckBoxOutlineBlankOutlinedIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import "./css/EmailList.css";

function EmailBody({ name, subject, time, message }) {
  return (
    <div className="emailbody">
      <div className="email__left">
        <CheckBoxOutlineBlankOutlinedIcon />
        <StarBorderIcon />
        <LabelOutlinedIcon />
        <h4>{name}</h4>
      </div>
      <div className="email__middle">
        <div className="email__middle__msg">
          <p>
            {subject}
            <b>{message}</b>
          </p>
        </div>
      </div>
      <div className="email__right">
        <p>{time}</p>
      </div>
    </div>
  );
}

export default EmailBody;

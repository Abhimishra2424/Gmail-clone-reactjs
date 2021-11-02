import React from "react";
import "./css/EmailList.css";
import EmailListSetting from "./EmailListSetting";
import EmailType from "./EmailType";

function EmailList() {
  return (
    <div className="emaillist">
      <EmailListSetting />
      <EmailType />
    </div>
  );
}

export default EmailList;

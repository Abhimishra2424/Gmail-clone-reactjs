import React from "react";
import "./css/EmailList.css";
import EmailBody from "./EmailBody";
import EmailListSetting from "./EmailListSetting";
import EmailType from "./EmailType";

function EmailList() {
  return (
    <div className="emaillist">
      <EmailListSetting />
      <EmailType />
      <EmailBody
        name="Abhishek Mishra"
        subject="this is subject"
        message="we are learing react js"
        time="03:30 PM"
      />
    </div>
  );
}

export default EmailList;

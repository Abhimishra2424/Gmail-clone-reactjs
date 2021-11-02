import React from "react";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import "./css/EmailList.css";


function EmailType() {
  return (
    <div className="emailtype">
      <div className="emailtype__option  emailtype__options--active">
        <InboxIcon />
        <p>Primary</p>
      </div>
      <div className="emailtype__option">
        <PeopleIcon />
        <p>Social</p>
      </div>
      <div className="emailtype__option">
        <LocalOfferIcon />
        <p>Promotions</p>
      </div>
    </div>
  );
}

export default EmailType;

import React from "react";
import "./css/Sidebar.css";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SidebarOptions from "./SidebarOptions";
import InboxIcon from "@material-ui/icons/Inbox";
import StarRateIcon from "@material-ui/icons/StarRate";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import SendIcon from "@material-ui/icons/Send";
import DraftsIcon from "@material-ui/icons/Drafts";
import DeleteIcon from "@material-ui/icons/Delete";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import VideocamIcon from "@material-ui/icons/Videocam";
import KeyboardIcon from "@material-ui/icons/Keyboard";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button startIcon={<AddIcon />} className="compose__btn">
        Compose
      </Button>
      <SidebarOptions
        icon={<InboxIcon />}
        title="inbox"
        number="224"
        isActive={true}
      />
      <SidebarOptions icon={<StarRateIcon />} title="Starred" number="224" />
      <SidebarOptions icon={<WatchLaterIcon />} title="Snoozed" number="224" />
      <SidebarOptions
        icon={<LabelImportantIcon />}
        title="Important"
        number="224"
      />
      <SidebarOptions icon={<SendIcon />} title="Sent" number="224" />
      <SidebarOptions icon={<DraftsIcon />} title="Drafts" number="224" />
      <SidebarOptions
        icon={<LabelImportantIcon />}
        title="Category"
        number="224"
      />
      <SidebarOptions icon={<DeleteIcon />} title="[Map]/Trash" number="224" />
      <SidebarOptions
        icon={<FindInPageIcon />}
        title="Documents"
        number="224"
      />

      <SidebarOptions icon={<ExpandMoreIcon />} title="More" number="224" />

      <hr />
      <h3 className="sidebarOptions__heading">Meet</h3>
      <SidebarOptions icon={<VideocamIcon />} title={"New Meeting"} />
      <SidebarOptions icon={<KeyboardIcon />} title={"Join a meeting"} />
    </div>
  );
}

export default Sidebar;

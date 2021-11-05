import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import HeightIcon from "@material-ui/icons/Height";
import CloseIcon from "@material-ui/icons/Close";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import LinkIcon from "@material-ui/icons/Link";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import PhotoIcon from "@material-ui/icons/Photo";
import PhonelinkIcon from "@material-ui/icons/Phonelink";
import CreateIcon from "@material-ui/icons/Create";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import "./css/Compose.css";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";

function Compose() {
  const dispatch = useDispatch();
  return (
    <div className="compose">
      <div className="compose__header">
        <div className="compose__header__left">
          <span>New Message</span>
        </div>
        <div className="compose__header__right">
          <RemoveIcon />
          <HeightIcon />
          <CloseIcon onClick={() => dispatch(closeSendMessage())} />
        </div>
      </div>
      <div className="compose__body">
        <div className="compose__bodyform">
          <input type="email" placeholder="Reciepents" />
          <input type="text" placeholder="Subject" />

          <textarea rows="20"></textarea>
        </div>
      </div>
      <div className="compose__footer">
        <div className="compose__footer__left">
          <button type="submit">
            Send
            <ArrowDropDownIcon />
          </button>
        </div>
        <div className="compose__footer__right">
          <FormatColorTextIcon />
          <AttachFileIcon />
          <LinkIcon />
          <InsertEmoticonIcon />
          <NoteAddIcon />
          <PhotoIcon />
          <PhonelinkIcon />
          <CreateIcon />
          <MoreVertIcon />
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
}

export default Compose;

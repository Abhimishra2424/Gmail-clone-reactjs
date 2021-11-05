import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Compose from "./Compose";
import EmailList from "./EmailList";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { selectSendMessageIsOpen } from "./features/mailSlice";

function App() {
  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  return (
    <div>
      <Header />
      <div className="app__body">
        <Sidebar />
        <EmailList />
      </div>
      {isMessageOpen && <Compose />}
    </div>
  );
}

export default App;

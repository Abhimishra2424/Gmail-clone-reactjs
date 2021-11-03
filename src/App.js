import React from "react";
// import { Counter } from './features/counter/Counter';
import "./App.css";
import Compose from "./Compose";
import EmailList from "./EmailList";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className="app__body">
        <Sidebar />
        <EmailList />
      </div>
      <Compose />
    </div>
  );
}

export default App;

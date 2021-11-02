import React from "react";
// import { Counter } from './features/counter/Counter';
import "./App.css";
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
    </div>
  );
}

export default App;

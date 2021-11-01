import React from "react";
import "./css/SidebarOptions.css";

function SidebarOptions({ icon, title, number, isActive }) {
  return (
    <div className={`sidebarOptions ${isActive && "sidebarOptions--active"}  `}>
      {icon}
      <h4>{title}</h4>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOptions;

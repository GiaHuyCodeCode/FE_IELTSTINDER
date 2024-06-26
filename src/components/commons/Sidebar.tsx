import React, { useState } from "react";
import { FiHome } from "react-icons/fi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { NavLink } from "react-router-dom";


interface SidebarProps {}



// const Sidebar: React.FunctionComponent<SidebarProps> = () => {
//   return (
//     <div className="sidebar">
//       <NavLink className={"sidebar__button"} to={"/"}>
//         <FiHome className={"icon"} />
//         Home
//       </NavLink>
//       <NavLink className={"sidebar__button"} to={"/communication"}>
//         <MdOutlineConnectWithoutContact className={"icon"} />
//         Communication
//       </NavLink>
//       <NavLink className={"sidebar__button"} to={"/practice"}>
//         <TfiWrite className={"icon"} />
//         Practice
//       </NavLink>
//     </div>
//   );


interface SidebarProps {}

const Sidebar: React.FunctionComponent<SidebarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <NavLink className="sidebar__button" to="/" onClick={toggleSidebar}>
          <FiHome className="icon" />
          Home
        </NavLink>
        <NavLink className="sidebar__button" to="/communication" onClick={toggleSidebar}>
          <MdOutlineConnectWithoutContact className="icon" />
          Communication
        </NavLink>
        <NavLink className="sidebar__button" to="/practice" onClick={toggleSidebar}>
          <TfiWrite className="icon" />
          Practice
        </NavLink>
      </div>
    </>
  );

  
};

export { Sidebar };



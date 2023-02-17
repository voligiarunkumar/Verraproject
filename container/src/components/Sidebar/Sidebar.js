import React, { useContext, useRef, useState } from "react";
import {
  SDivider,
  SLink,
  SLinkContainer,
  SSidebar,
} from "./styles";
import { Link, useLocation } from "react-router-dom";
const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { pathname } = useLocation();
  return (
    <SSidebar isOpen={sidebarOpen}>
      <SDivider />
      {linksArray.map(({label, to }) => (
        <div key={label} isActive={pathname === to}>
          <Link to={to}>
            <ul>{label}</ul>
          </Link>
        </div>
      ))}
      <SDivider />
    </SSidebar>
  );
};

const linksArray = [
  {
    label: "Home",

    to: "/",
  },
  {
    label: "shipping",

    to: "/shipping",
  },
  {
    label: "sharedata",

    to: "/shareddata",
  },
  {
    label: "vtrace",

    to: "/vtrace",
  },
];
export default Sidebar;

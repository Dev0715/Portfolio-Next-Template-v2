import type { NextPage } from "next";
import { useState } from "react";

interface INavbarProps {
  onNavItemClick: (item: string) => void;
}

export const Navbar: NextPage<INavbarProps> = ({ onNavItemClick = () => {} }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="menu">
          <input
            className="check"
            type="checkbox"
            onChange={() => setShowSidebar(!showSidebar)}
            checked={showSidebar}
          />
          <div className={showSidebar ? "line line-1" : "line1"}></div>
          <div className={showSidebar ? "line line-2" : "line2"}></div>
          <div className={showSidebar ? "line line-3" : "line3"}></div>
        </div>

        <p className="navbar_name">Himanshu</p>
        <div className="navbar_list">
          <p className="navbar_list_item" onClick={() => onNavItemClick("about")}>
            About
          </p>
          <p className="navbar_list_item" onClick={() => onNavItemClick("jobs")}>
            Work
          </p>
          <p className="navbar_list_item" onClick={() => onNavItemClick("projects")}>
            Projects
          </p>
          <p className="navbar_list_item" onClick={() => onNavItemClick("skills")}>
            Skills
          </p>
          <p className="navbar_list_item" onClick={() => onNavItemClick("contact")}>
            Contact
          </p>
        </div>
      </nav>

      <div className={showSidebar ? "sidebar active" : "sidebar"}>
        <p className="sidebar_item" onClick={() => onNavItemClick("about")}>
          About
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick("jobs")}>
          Work
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick("projects")}>
          Projects
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick("skills")}>
          Skills
        </p>
        <p className="sidebar_item" onClick={() => onNavItemClick("contact")}>
          Contact
        </p>
      </div>
    </>
  );
};
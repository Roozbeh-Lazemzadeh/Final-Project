import React, { useState } from "react";
import logo2 from "../../../picture/logo2.svg";
import "../../../module/profile.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Tooltip } from "antd";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

export default function Header() {
  const { setSession, setUser } = useContext(UserContext);
  const customColors = ["#1b1b1b"];
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleHoverChange = (open) => {
    setHovered(open);
  };

  function handleLogOut() {
    setUser(null);
    setSession(null);
    localStorage.clear();
    navigate("/login", { replace: true });
  }
  function handleNavigateToHome() {
    navigate("/", { replace: true });
  }
  return (
    <header className="profile_header">
      <div className="profile_header_container">
        <div className="profile_header_container_logo">
          <NavLink to={"/"}>
            <img src={logo2} />
          </NavLink>
        </div>
        <div className="profile_header_container_actions">
          <div className="header__actions__item" onClick={handleLogOut}>
            <Tooltip
              color={customColors}
              title={<span>Log out</span>}
              trigger="hover"
              placement="bottom"
              open={hovered}
              onOpenChange={handleHoverChange}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="header__actions__item--icon"
              >
                <path d="M48 64h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48zm279 19.5l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l132 131.4H172c-6.6 0-12 5.4-12 12v10c0 6.6 5.4 12 12 12h279.9L320 404.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l164.5-164c4.7-4.7 4.7-12.3 0-17L344 83.5c-4.7-4.7-12.3-4.7-17 0z"></path>
              </svg>
            </Tooltip>
          </div>
          <div className="header__actions__item" onClick={handleNavigateToHome}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="header__actions__item--icon"
            >
              <path d="M541 229.16l-61-49.83v-77.4a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v51.33L308.19 39.14a32.16 32.16 0 0 0-40.38 0L35 229.16a8 8 0 0 0-1.16 11.24l10.1 12.41a8 8 0 0 0 11.2 1.19L96 220.62v243a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-128l64 .3V464a16 16 0 0 0 16 16l128-.33a16 16 0 0 0 16-16V220.62L520.86 254a8 8 0 0 0 11.25-1.16l10.1-12.41a8 8 0 0 0-1.21-11.27zm-93.11 218.59h.1l-96 .3V319.88a16.05 16.05 0 0 0-15.95-16l-96-.27a16 16 0 0 0-16.05 16v128.14H128V194.51L288 63.94l160 130.57z"></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

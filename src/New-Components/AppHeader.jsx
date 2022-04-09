import React from "react";
import { AdminIcon } from "../Icons/AdminIcon";
import { HamberGerIcon } from "../Icons/HambergerMenuIcon";
import { Logo } from "../Icons/Logo";
import { NotifyIcon } from "../Icons/NotifiIcon";
import { SearchIcon } from "../Icons/SearchIcon";
import { SettingsIcon } from "../Icons/SettingsIcon";
import "../Style.css";

export const AppHeader = () => {
  return (
    <div className="appContainer">
      <div style={{ display: "flex" }}>
        <div style={{ paddingLeft: "10px" }}>
          <HamberGerIcon />
        </div>
        <div style={{ paddingLeft: "10px" }}>
          <Logo />
        </div>
      </div>
      <div>
        <p>My studio App Builder</p>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <SearchIcon />
        </div>
        <div style={{ paddingLeft: "10px" }}>
          <NotifyIcon />
        </div>
        <div style={{ paddingLeft: "10px" }}>
          <AdminIcon />
        </div>
        <div style={{ paddingRight: "10px", paddingLeft: "10px" }}>
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
};

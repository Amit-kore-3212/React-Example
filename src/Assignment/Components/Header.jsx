import React from "react";
import { AdminIcon } from "../Icons/AdminIcon";
import { HelpIcon } from "../Icons/HelpIcon";
import { NotificationIcon } from "../Icons/NotificationIcon";

export const HeaderComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>
          <button
            style={{
              height: "40px",
              width: "100px",
              color: "#0072ff",
              border: "1px solid #0072ff",
            }}
          >
            LOGO
          </button>
        </div>
        <div>Menu1</div>
        <div>Menu2</div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "flex-end",
          paddingRight: "50px",
        }}
      >
        <div>
          <HelpIcon />
        </div>
        <div>
          <NotificationIcon />
        </div>
        <div>
          <AdminIcon />
        </div>
      </div>
    </div>
  );
};

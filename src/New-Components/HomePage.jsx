import React from "react";
import { AppHeader } from "./AppHeader";
import { DeleteOperation } from "./DeleteOperation";
import "../Style.css";

export const HomePage = () => {
  return (
    <div className="container">
      <div>
        <AppHeader />
      </div>
      <div>
        <DeleteOperation />
      </div>
    </div>
  );
};

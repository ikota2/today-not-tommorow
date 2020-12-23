import React from "react";
import { CategoriesEditor } from "../CategoriesEditor/CategoriesEditor";

export function Settings() {
  return (
    <div className="settings">
      {/* <div className="setting__language">change language switcher</div>
      <div className="settings__theme">dark mode switcher</div>
      <div className="settings__privacy">
        everybody switcher friends only switcher nobody switcher
      </div> */}
      <div className="settings__changeCategory">
        <CategoriesEditor />
      </div>
    </div>
  );
}

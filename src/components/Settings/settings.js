import React from "react";
import { CategoriesEditor } from "../CategoriesEditor/CategoriesEditor";

export function Settings() {
  return (
    <div className="settings">
      <div className="settings__changeCategory">
        <CategoriesEditor />
      </div>
    </div>
  );
}

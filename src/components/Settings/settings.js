import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faToggleOn,
  faToggleOff,
} from "@fortawesome/free-solid-svg-icons";
import { CategoriesEditor } from "../CategoriesEditor/CategoriesEditor";
import "./settings.css";

export function Settings() {
  const [visible, setVisible] = useState(false);
  const [dark, setDark] = useState(false);
  return (
    <div className='settings'>
      <div className='settings__changeCategory'>
        <div className='settings__changeCategory_buttonAndDescription'>
          <span className='settings__changeCategory_description'>
            edit categories
          </span>
          <button
            className='settings__changeCategory_button'
            onClick={() => setVisible((prev) => !prev)}
          >
            {visible ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}
          </button>
        </div>
        {visible ? <CategoriesEditor /> : null}
      </div>
      <div className='settings__darkTheme'>
        <span className=''>dark theme</span>
        <button
          className='settings__darkTheme_button'
          onClick={() => setDark((prev) => !prev)}
        >
          {dark ? (
            <FontAwesomeIcon icon={faToggleOff} />
          ) : (
            <FontAwesomeIcon icon={faToggleOn} />
          )}
        </button>
      </div>
    </div>
  );
}

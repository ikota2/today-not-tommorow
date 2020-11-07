import React from "react";
import "./main.css";
import { Calendar } from "../Calendar/calendar";
import { Stats } from "../Stats/stats";
import { Tasks } from "../Tasks/tasks";

export function Main() {
  return (
    <div className="main">
      <div className="main__calendarWrapper">
        <Calendar />
      </div>
      
      <div className="main__tasksWrapper">
        <Tasks />
      </div>
      <div className="main__statsWrapper">
        <Stats />
      </div>
    </div>
  );
}

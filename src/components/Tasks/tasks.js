import React from "react";
import { TodayList } from "../TodayList/todayList.js";
import { AddTask } from "../AddTask/AddTask.js";

export function Tasks() {
  return (
    <>
      <AddTask />
      <TodayList />
    </>
  );
}

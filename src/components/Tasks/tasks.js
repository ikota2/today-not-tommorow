import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodayList } from "../TodayList/todayList.js";
import { Form } from "../Form/form.js";
import { AddTask } from "../AddTask/AddTask.js";

export function Tasks() {
  return (
    <>
      <AddTask />
      <TodayList />
    </>
  );
}

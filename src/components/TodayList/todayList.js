import React from "react";
import { Task } from "../Task/task.js";

export function TodayList({ tasks, onChange, deleteTask }) {
  // const tasks = props.tasks;
  // const { tasks } = props;
  // если оставить 4 или 5 строку, то в TodayList можно написать props и будет работать %)
  // console.log(props);

  return (
    <div className="todayList__wrapper">
      <div className="todayList__taskWrapper">
        {tasks.map(({ sentense, id }) => (
          <Task
            task={sentense}
            id={id}
            key={id}
            onChange={onChange}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

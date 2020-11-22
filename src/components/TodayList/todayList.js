import React from "react";
import { Task } from "../Task/task.js";

export function TodayList({ tasks, onChange, deleteTask, completeTask }) {
  // const tasks = props.tasks;
  // const { tasks } = props;
  // если оставить 5 или 6 строку, то в TodayList можно написать props и будет работать %)
  // console.log(props);

  return (
    <div className="todayList">
      {tasks.map(({ sentense, id, date, option, done }) => (
        <Task
          task={sentense}
          option={option}
          done={done}
          id={id}
          key={id}
          onChange={onChange}
          deleteTask={deleteTask}
          completeTask={completeTask}
          date={date}
        />
      ))}
    </div>
  );
}

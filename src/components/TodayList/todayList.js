import React from "react";
import { connect } from "react-redux";
import { Task } from "../Task/task.js";

function mapStateToProps(state) {
  return { tasks: state.tasks };
}

export const TodayList = connect(mapStateToProps)(TodayList_);
function TodayList_({ tasks }) {
  // const tasks = props.tasks;
  // const { tasks } = props;
  // если оставить 5 или 6 строку, то в TodayList можно написать props и будет работать %)
  // console.log(props);

  console.log("🦔", tasks);

  return (
    <div className='todayList'>
      {tasks.map(({ id, description, categoryId, done, date }) => (
        <Task
          task={description}
          option={categoryId}
          done={done}
          id={id}
          key={id}
          date={date}
        />
      ))}
    </div>
  );
}

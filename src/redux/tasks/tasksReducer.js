import { ADD_TASK, EDIT_TASK, REMOVE_TASK, TOGGLE_TASK } from "./types";
import { v4 as uuidv4 } from "uuid";

const tasks = [];

export function taskReducer(state = tasks, action) {
  if (action.type === ADD_TASK) {
    return [
      ...state,
      {
        id: uuidv4(),
        description: action.description,
        categoryId: action.categoryId,
        done: false,
        date: new Date(),
      },
    ];
  }
  if (action.type === EDIT_TASK) {
    return state.map((task) =>
      task.id === action.id
        ? {
            ...task,
            description: action.description,
            categoryId: action.categoryId,
          }
        : task
    );
  }
  if (action.type === TOGGLE_TASK) {
    return state.map((task) =>
      task.id === action.id
        ? {
            ...task,
            done: !task.done,
          }
        : task
    );
  }
  if (action.type === REMOVE_TASK) {
    return state.filter((task) => task.id !== action.id);
  }
  return state;
}

import * as types from "./types";
import { v4 as uuidv4 } from "uuid";

const tasks = [];

export function taskReducer(state = tasks, action) {
  if (action.type === types.ADD_TASK) {
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
  if (action.type === types.EDIT_TASK) {
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
  if (action.type === types.TOGGLE_TASK) {
    return state.map((task) =>
      task.id === action.id
        ? {
            ...task,
            done: !task.done,
          }
        : task
    );
  }
  if (action.type === types.REMOVE_TASK) {
    return state.filter((task) => task.id !== action.id);
  }
  return state;
}

import * as types from "./types";
import { v4 as uuidv4 } from "uuid";

const tasks = [
  {
    id: uuidv4(),
    description: "помыть полы",
    categoryId: 100,
    done: false,
    date: new Date(),
  },
  {
    id: uuidv4(),
    description: "купить хлеб",
    categoryId: 707,
    done: false,
    date: new Date(),
  },
  {
    id: uuidv4(),
    description: "сделать уроки",
    categoryId: 788,
    done: false,
    date: new Date(),
  },
  {
    id: uuidv4(),
    description: "покататься на велосипеде",
    categoryId: 877,
    done: false,
    date: new Date(),
  },
];

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

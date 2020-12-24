import * as types from "./types";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: "100",
    description: "home",
    color: "#000000",
  },
  {
    id: "777",
    description: "work",
    color: "#33ff00",
  },
  {
    id: "788",
    description: "education",
    color: "#44bb00",
  },
  {
    id: "877",
    description: "entertainment",
    color: "#33ee23",
  },
  {
    id: "707",
    description: "shopping",
    color: "#33ff00",
  },
];

export function categoriesReducer(state = initialState, action) {
  if (action.type === types.ADD_CATEGORY) {
    return [
      ...state,
      { id: uuidv4(), description: action.description, color: action.color },
    ];
  }
  if (action.type === types.REMOVE_CATEGORY) {
    return state.filter((category) => category.id !== action.id);
  }
  if (action.type === types.CHANGE_CATEGORY_COLOR) {
    return state.map((category) =>
      category.id === action.id
        ? { ...category, color: action.color }
        : category
    );
  }
  if (action.type === types.EDIT_CATEGORY) {
    return state.map((category) =>
      category.id === action.id
        ? { ...category, description: action.description, color: action.color }
        : category
    );
  }
  return state;
}

// const reducer = combineReducers({
//   categories: categoriesRducer,
//   tasks: tasksReducer,
// })

// const example1 = {
//   type: types.ADD_CATEGORY,
//   description: "work",
//   color: "blue",
// };

// const initialState = [
//   {
//     id: 100,
//     description: "home",
//     color: "black",
//   },
//   {
//     id: 111, // uuid()
//     description: "work",
//     color: "blue",
//   }
// ];

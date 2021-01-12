import {
  ADD_CATEGORY,
  EDIT_CATEGORY,
  REMOVE_CATEGORY,
  CHANGE_CATEGORY_COLOR,
} from "./types";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: uuidv4(),
    description: "home",
    color: "#000000",
  },
  {
    id: uuidv4(),
    description: "work",
    color: "#33ff00",
  },
  {
    id: uuidv4(),
    description: "education",
    color: "#44bb00",
  },
  {
    id: uuidv4(),
    description: "entertainment",
    color: "#33ee23",
  },
  {
    id: uuidv4(),
    description: "shopping",
    color: "#33ff00",
  },
];

export function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORY:
      return [
        ...state,
        { id: uuidv4(), description: action.description, color: action.color },
      ];
    case EDIT_CATEGORY:
      return state.map((category) =>
        category.id === action.id
          ? {
              ...category,
              description: action.description,
              color: action.color,
            }
          : category
      );
    case REMOVE_CATEGORY:
      return state.filter((category) => category.id !== action.id);
    case CHANGE_CATEGORY_COLOR:
      return state.map((category) =>
        category.id === action.id
          ? { ...category, color: action.color }
          : category
      );
    default:
      return state;
  }
}

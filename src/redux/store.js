import { createStore, combineReducers } from "redux";
import { categoriesReducer } from "./categories/categoriesReducer";
import { taskReducer } from "./tasks/tasksReducer";

const reducer = combineReducers({
  categories: categoriesReducer,
  tasks: taskReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState());

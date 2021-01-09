import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Header } from "./components/Header/header";
import { Main } from "./components/Main/main.js";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;

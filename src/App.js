import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { Header } from "./components/Header/header";
import { Main } from "./components/Main/main.js";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;

import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Navigation from "./Navigation";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;

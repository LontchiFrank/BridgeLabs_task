import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import Navigation from "./Navigation";

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;

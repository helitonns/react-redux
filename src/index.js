import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./04/08/App";
import store from "./04/08/store/configureStore";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

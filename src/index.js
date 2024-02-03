import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./05/02/App";
import store from "./05/02/store/configureStore";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

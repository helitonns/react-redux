import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./05/05/App";
import store from "./05/05/store/configureStore";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Provider } from "react-redux";
import App from "./App";
import ApplicationStore from "./Components/AppStore/AppliactionStorage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={ApplicationStore}>
      <App />
    </Provider>
  </BrowserRouter>
);

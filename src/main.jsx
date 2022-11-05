import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);

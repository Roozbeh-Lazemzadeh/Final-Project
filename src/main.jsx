import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./module/normalize.css";
import "./module/reset.css";
import "antd/dist/antd.css";
import "./module/header.css";
import "./module/footer.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

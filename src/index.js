import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import "./vrc/index.scss";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

serviceWorker.register();

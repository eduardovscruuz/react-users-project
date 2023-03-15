import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { GlobalStyle } from "./globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<Home />, <GlobalStyle />
	</>
);

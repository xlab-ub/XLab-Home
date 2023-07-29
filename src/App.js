import React from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import Team from "./pages/team";
import Projects from "./pages/projects";
import Research from "./pages/research";
import Publications from "./pages/publications";
import Bio from "./pages/bio";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/team" element={<Team />} />
				<Route path="/research" element={<Research />} />
				<Route path="/publications" element={<Publications />} />
				<Route path="/bio" element={<Bio />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;

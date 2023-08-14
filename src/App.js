/* eslint-disable react/prop-types */

import React from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import Team from "./pages/team";
import Research from "./pages/research";
import Publications from "./pages/publications";
import Bio from "./pages/bio";
import Opensource from "./pages/opensource";
import Events from "./pages/events";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";
import './static/css/main.scss'

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
				<Route path="/bio" element={<Bio />} />
				<Route path="/events" element={<Events />} />
				<Route path="/team" element={<Team />} />
				<Route path="/research" element={<Research />} />
				<Route path="/publications" element={<Publications />} />
				<Route path="/opensource" element={<Opensource />} />
			</Routes>
		</div>
	);
}

export default App;

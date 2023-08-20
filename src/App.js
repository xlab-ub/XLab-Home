/* eslint-disable react/prop-types */

import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import Team from "./pages/team";
import Research from "./pages/research";
import Publications from "./pages/publications";
import Bio from "./pages/bio";
import Opensource from "./pages/opensource";
import Events from "./pages/events";
import Blog from "./pages/blog";
import SearchComponent from './components/publications/actions.jsx'

import "./app.css";
import './static/css/main.scss'

function App() {

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/bio" element={<Bio />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/events" element={<Events />} />
				<Route path="/team" element={<Team />} />
				<Route path="/research" element={<Research />} />
				<Route path="/search" element={<SearchComponent />} />
				<Route path="/publications" element={<Publications />} />
				<Route path="/opensource" element={<Opensource />} />
			</Routes>
		</div>
	);
}

export default App;

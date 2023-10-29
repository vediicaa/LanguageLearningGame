import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import LanguageSelection from "./components/LanguageSelection";
import EnglishLearningPage from "./components/EnglishLearningPage";
import SpanishLearningPage from "./components/SpanishLearningPage";
import FrenchLearningPage from "./components/FrenchLearningPage";
import GermanLearningPage from "./components/GermanLearningPage";
import ItalianLearningPage from "./components/ItalianLearningPage";
import Dashboard from "./components/Dashboard";
import LeaderBoard from "./components/LeaderBoard";

function App() {
	const user = localStorage.getItem("token");
	console.log(user)
	return (
		<Routes>
			<Route path="/login" exact element={<Login />} />
			<Route path="/signup" exact element={<Signup />} />
			<Route
				path="/language"
				element={user ? <LanguageSelection/> : <Navigate  to="../login" />}
			/>
			<Route
				path="/english"
				element={user ? <EnglishLearningPage/> : <Navigate  to="../login" />}
			/>
			<Route
				path="/"
				element={user ? <Main/> : <Navigate  to="../login" />}
			/>
			<Route
				path="/spanish"
				element={user ? <SpanishLearningPage/> : <Navigate  to="../login" />}
			/>
			<Route
				path="/french"
				element={user ? <FrenchLearningPage/> : <Navigate  to="../login" />}
			/>
			<Route
				path="/german"
				element={user ? <GermanLearningPage/> : <Navigate  to="../login" />}
			/>
			<Route
				path="/italian"
				element={user ? <ItalianLearningPage/> : <Navigate  to="../login" />}
			/>
			<Route
				path="/dashboard"
				element={user ? <Dashboard/> : <Navigate  to="../login" />}
			/>
			<Route
				path="/LeaderBoard"
				element={user ? <LeaderBoard/> : <Navigate  to="../login" />}
			/>
			
			
			
			

		</Routes>
	);
}

export default App;
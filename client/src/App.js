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

function App() {
	const user = localStorage.getItem("token");
	console.log(user)
	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/language" element={<LanguageSelection />} />
			<Route path="/english" element={<EnglishLearningPage />} />
			<Route path="/spanish" element={<SpanishLearningPage />} />
			<Route path="/french" element={<FrenchLearningPage />} />
			<Route path="/german" element={<GermanLearningPage />} />
			<Route path="/italian" element={<ItalianLearningPage />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/" element={<Navigate replace to="/login" />} />

		</Routes>
	);
}

export default App;
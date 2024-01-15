import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import LanguageSelection from "./pages/LanguageSelection";
import EnglishLearningPage from "./pages/EnglishLearningPage/index.jsx";
import Level from "./pages/EnglishLearningPage/Level.jsx";
import Beginner from "./pages/EnglishLearningPage/Beginner.jsx";
import ModuleoneBeginner from "./components/BeginnersModule/ModuleOne/index.jsx";
import ModuletwoBeginner from "./components/BeginnersModule/ModuleTwo/index.jsx";
import PronunciationPractice from './components/BeginnersModule/ModuleTwo/Pronounciation.jsx';
import Flashcard from './components/BeginnersModule/ModuleThree/Flashcards.jsx';
import ModulethreeBeginner from "./components/BeginnersModule/ModuleThree";
import ModulefourBeginner from "./components/BeginnersModule/ModuleFour";
import SpanishLearningPage from "./pages/SpanishLearningPage";
import FrenchLearningPage from "./pages/FrenchLearningPage";
import GermanLearningPage from "./pages/GermanLearningPage";
import ItalianLearningPage from "./pages/ItalianLearningPage";
import Dashboard from "./pages/Dashboard";
import LeaderBoard from "./pages/LeaderBoard";

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
				path="/english/beginner"
				element={user ? <Beginner/> : <Navigate  to="../login" />}
			/>
			<Route
				path="/english/level"
				element={user ? <Level/> : <Navigate  to="../login" />}
			/>
						<Route
				path="/english/beginner/moduleone"
				element={user ? <ModuleoneBeginner/> : <Navigate  to="../login" />}
			/>
			<Route
				path="/english/beginner/moduletwo"
				element={user ? <ModuletwoBeginner/> : <Navigate  to="../login" />}
			/>
			<Route
				path="/english/beginner/moduletwo/quiz"
				element={user ? <PronunciationPractice/> : <Navigate  to="../login" />}
			/>
			<Route
				path="/english/beginner/modulethree"
				element={user ? <ModulethreeBeginner/> : <Navigate  to="../login" />}
			/>
			<Route
				path="/english/beginner/modulethree/flashcards"
				element={user ? <Flashcard/> : <Navigate  to="../login" />}
			/>
			<Route
				path="/english/beginner/modulefour"
				element={user ? <ModulefourBeginner/> : <Navigate  to="../login" />}
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
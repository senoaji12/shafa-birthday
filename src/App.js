import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/homepage";
import LoginPage from "./components/pages/loginpage";
import AboutYouPage from "./components/pages/aboutyoupage";
import QuestionPage from "./components/pages/questionpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/aboutyou" element={<AboutYouPage />} />
        <Route path="/question" element={<QuestionPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;

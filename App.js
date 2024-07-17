import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CommunityPage from "./CommunityPage";
import StartPage from "./StartPage"; // Import the StartPage component

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/start" element={<StartPage />} /> {/* Add this line */}
    </Routes>
  );
}

export default App;

import { useState } from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import RecipeDetailPage from "./pages/RecipeDetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detail/:id" element={<RecipeDetailPage />} />
      </Routes>
    </>
  );
}

export default App;

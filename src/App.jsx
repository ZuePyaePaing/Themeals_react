import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./components/Navbar";
import MealDatails from "./page/MealDatails";
import SearchMeal from "./page/SearchMeal";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<MealDatails />} />
        <Route path="/search/:name" element={<SearchMeal />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;

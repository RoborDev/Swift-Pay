import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accounts from "./components/SideBar/pages/Accounts";
import CardSc from "./components/SideBar/pages/CardSc";
import Analytics from "./components/SideBar/pages/Analytics";
import Settings from "./components/SideBar/pages/Settings";
import BankDetailsCard from "./components/SideBar/Card/SideCard";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Main content area for pages */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Accounts />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/card" element={<CardSc />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />

            {/* Route for BankDetailsCard */}
            <Route path="/card/details" element={<BankDetailsCard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Accounts from "./components/SideBar/pages/Accounts";
import CardSc from "./components/SideBar/pages/CardSc";
import Analytics from "./components/SideBar/pages/Analytics";
import Settings from "./components/SideBar/pages/Settings";
import BankDetailsCard from "./components/SideBar/Card/SideCard";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <meta name="theme-color" content="#ffffff" />
          <style>{`body { background-color: white; }`}</style>
        </Helmet>
        <div className="app">
          <div className="content">
            <Routes>
              <Route path="/" element={<Accounts />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/card" element={<CardSc />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/card/details" element={<BankDetailsCard />} />
            </Routes>
          </div>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

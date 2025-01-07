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
          {/* Theme Color for Android */}
          <meta name="theme-color" content="#FF5733" />
          {/* Enable web app mode on iOS */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          {/* Body background for visual consistency */}
          <style>{`body { background-color: #FF5733; }`}</style>
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

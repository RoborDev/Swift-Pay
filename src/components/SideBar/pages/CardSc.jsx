import React, { useState, useEffect } from "react";
import Sidebar from "../SideBar";
import Navbar from "../Body/NavBar/NavBar";
import Balance from "../Body/Balance/Balance";
import BodyTwo from "../Body/BodyTwo";
import BankDetailsCard from "../Card/SideCard"; // Import the BankDetailsCard component
import styles from "./CardSc.module.css"; // Import the CSS module

function CardSc() {
  const [showDetails, setShowDetails] = useState(false); // State to toggle between views
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // State to check if the screen is mobile
  const [customSidebar, setCustomSidebar] = useState(false); // State to add a custom class

  // Toggle function for showing/hiding the details
  const toggleDetails = () => {
    setShowDetails(!showDetails);
    setCustomSidebar(!customSidebar); // Toggle class
    console.log("CustomSidebar:", !customSidebar); // Debug state
  };

  // Dynamic viewport height for mobile screens
  useEffect(() => {
    const setVH = () => {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    };
    setVH();
    window.addEventListener("resize", setVH);
    return () => window.removeEventListener("resize", setVH);
  }, []);

  // Detect if the screen size is mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.swift}>
      {/* Sidebar is hidden when showDetails is true */}
      {(!showDetails || !isMobile) && (
      <Sidebar
        className={`${styles.sidebar} ${customSidebar ? styles.hiddenSidebar : ""}`}
      />
    )}

      <div className={styles.container}>
        {/* Navbar remains */}
        <Navbar title="Card" subtitle="Shop securely, pay subscription easily" />
        <Balance label="Card balance" amount="120.58 USD" showIcons={false} />

        {/* Render BodyTwo or BankDetailsCard based on state */}
        {showDetails ? (
          <BankDetailsCard />
        ) : (
          <BodyTwo toggleSideCard={toggleDetails} />
        )}
      </div>
    </div>
  );
}

export default CardSc;

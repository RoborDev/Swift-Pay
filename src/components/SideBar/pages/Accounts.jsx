import React, { useEffect, useState } from "react";
import Sidebar from "../SideBar";
import Body from "../Body/Body";
import Navbar from "../Body/NavBar/NavBar";
import Balance from "../Body/Balance/Balance";
import styles from "./Accounts.module.css";

function Accounts() {
  const [showSideCard, setShowSideCard] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
      {/* Show Sidebar on desktop, and on mobile only when SideCard is not active */}
      {(!isMobile || !showSideCard) && <Sidebar className={styles.sidebar} />}

      <div className={styles.container}>
        <Navbar
          className={styles.navbar}
          title="Accounts"
          subtitle="Welcome back, Favour Dumnoi!"
        />
        <Balance />
        <Body
          title="Balances"
          button={
            <button
              className={styles["add-balance-button"]}
              onClick={() => setShowSideCard(true)} // Show SideCard
            >
              +Add New Balance
            </button>
          }
          setShowSideCard={setShowSideCard} // Pass state toggle function
        />
      </div>
    </div>
  );
}

export default Accounts;

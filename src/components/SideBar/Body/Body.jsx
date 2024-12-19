import React, { useState, useEffect } from "react";
import Header from "../Boottom-Half/Header/Header";
import Card from "../Card/Card";
import SideCard from "../Card/SideCard";
import styles from "./Body.module.css";

function Body({ title, button }) {
  const [showSideCard, setShowSideCard] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detect if the screen is mobile-sized
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle the SideCard
  const toggleSideCard = () => {
    setShowSideCard((prev) => !prev);
  };

  return (
    <div className={styles.bodyMain}>
      {/* Overlay for mobile when SideCard is active */}
      {isMobile && showSideCard && (
        <div
          className={styles.transparentOverlay}
          onClick={toggleSideCard} // Clicking overlay closes SideCard
        ></div>
      )}

      {/* Page Header */}
      <Header title={title} content={button} />

      <div className={styles.bodyContent}>
        {/* Main Card */}
        {!isMobile || !showSideCard ? (
          <div className={styles.leftColumn}>
            <Card toggleSideCard={toggleSideCard} />
          </div>
        ) : null}

        {/* SideCard */}
        {(!isMobile || showSideCard) && (
          <div
            className={`${styles.rightColumn} ${
              isMobile && showSideCard ? styles.show : ""
            }`}
          >
            <SideCard toggleSideCard={toggleSideCard} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Body;
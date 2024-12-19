import React from "react";
import Header from "../Boottom-Half/Header/Header";
import CardCard from "../Card/CardCard";
import Cardpic from "../../../Images/Card.png";
import styles from "./BodyTwo.module.css";

function BodyTwo({ toggleSideCard }) {
  return (
    <div className={styles.bodyMain}>
      <Header
        title="Manage Card"
        content={
          <img
            src={Cardpic}
            alt="CreditCard"
            className={styles.addBalanceImage}
          />
        }
      />

      {/* Render the main card with toggle functionality */}
      <CardCard onCardClick={toggleSideCard} />
    </div>
  );
}

export default BodyTwo;

import React from "react";
import styles from "./SideCard.module.css"; 
import x from "../../../Images/x.svg";
import Copy from "../../../Images/Copy.svg";

const BankDetailsCard = ({ toggleSideCard }) => {
  return (
    <div className={styles.sideCard}>
     <div className={styles.sideCardHeader}>
  <h3>Your GBP Bank Account Details</h3>

  {/* Copy Button with Text */}
  <button className={styles.copyButton}>
     <span>Copy</span>
    <img src={Copy} alt="Copy Icon" />
  </button>

  {/* Close Button */}
  <button className={styles.closeButton} onClick={toggleSideCard}>
    <img src={x} alt="Close" />
  </button>
</div>

      <div className={styles.sideCardCon}>
        <div className={styles.sideCardBody}>
          <div className={styles.cardRow}>
            <p className={styles.label}>Account Holder</p>
            <p className={styles.value}>Favour Parzival Dunmoi</p>
          </div>
          <div className={styles.cardRow}>
            <p className={styles.label}>Account Number</p>
            <p className={styles.value}>19277429</p>
          </div>
          <div className={styles.cardRow}>
            <p className={styles.label}>IBAN</p>
            <p className={styles.value}>GB81 MNLI 7845 2024 4202 03</p>
          </div>
          <div className={styles.cardRow}>
            <p className={styles.label}>Swift Code</p>
            <p className={styles.value}>MNLIGB8G</p>
          </div>
          <div className={styles.cardRow}>
            <p className={styles.label}>Sort Code</p>
            <p className={styles.value}>202403</p>
          </div>
          <div className={styles.cardRow}>
            <p className={styles.label}>Bank Name</p>
            <p className={styles.value}>Moniepoint Limited</p>
          </div>
          <div className={styles.cardRow}>
            <p className={styles.label}>Bank Address</p>
            <p className={styles.value}>
              2nd Floor, Berkeley Square House, Berkeley Square, London W1J 5AP
            </p>
          </div>
        </div>
        <div className={styles.sideCardFooter}>
          <ul>
            <li>Incoming payments take 4-5 working days to be added to your balance</li>
            <li>Account can only receive funds in the Great Britain Pounds (GBP)</li>
            <li>You'll be charged a 1% fee on payments made into this account.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BankDetailsCard;

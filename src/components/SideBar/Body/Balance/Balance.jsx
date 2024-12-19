import React from 'react';
import styles from "./Balance.module.css"; // Import the CSS module
import BalanceIcon from "../../../../Images/BalanceIcon.svg";
import Avatar from "../../../../Images/Avatar.svg";
import down from "../../../../Images/down-sm.svg";

const Balance = ({ label, amount, showIcons = true }) => {
  return (
    <div className={styles.balanceContainer}>
      <div className={styles.balanceHeader}>
        <div className={styles.balanceInfo}>
          <div className={styles.labelAndIcons}>
            <p className={styles.balanceLabel}>{label}</p>
            {showIcons && (
              <div className={styles.icons}>
                <img src={BalanceIcon} alt="Balance Icon" className={styles.balanceIcon} />
                <img src={down} alt="Dropdown Icon" className={styles.downIcon} />
              </div>
            )}
          </div>
          <h1 className={styles.balanceAmount}>{amount}</h1>
        </div>
      </div>

      <div className={styles.rightSection}>
        <img src={Avatar} alt="User Avatar" className={styles.navbarAvatar} />
      </div>
    </div>
  );
};

Balance.defaultProps = {
  label: "Total balance",
  amount: "8,169,140.20 NGN",
  showIcons: true, // Default is to show icons
};

export default Balance;

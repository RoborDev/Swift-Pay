import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Images/Logo.svg";
import transact from "../../Images/transaction.svg";
import wallet from "../../Images/wallet.svg";
import card from "../../Images/card.svg";
import chart from "../../Images/chart.svg";
import gear from "../../Images/gear.svg";
import styles from "./SideBar.module.css";

const Sidebar = () => {
  const location = useLocation();

  // Map routes to menu names for active state detection
  const menuMapping = {
    "/accounts": "Accounts",
    "/transactions": "Transactions",
    "/card": "Card",
    "/analytics": "Analytics",
    "/settings": "Settings",
  };

  // Determine the active menu based on the current route
  const activeMenu = menuMapping[location.pathname] || "Accounts";

  return (
    <div className={styles.sidebar}>
      <div className={styles["sidebar-header"]}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" className={styles["logo-image"]} />
          <h2 className={styles["logo-text"]}>SWIFTPAY</h2>
        </div>
      </div>
      <div className={styles["sidebar-menu"]}>
        <ul>
        <Link to="/accounts">
          <li
            className={`${styles["menu-item"]} ${
              activeMenu === "Accounts" ? styles.active : ""
            }`}
          >    
              <img src={wallet} className={styles["side-bar-icon"]} alt="Wallet Icon" />
              <span>Accounts</span>  
          </li>
          </Link>

        <li className={`${styles["menu-item"]}`}>
           <img src={transact} className={styles["side-bar-icon"]} alt="Transaction Icon" />
        <span>Transactions</span>
        </li>

          <Link to="/card">
          <li
            className={`${styles["menu-item"]} ${
              activeMenu === "Card" ? styles.active : ""
            }`}
          >
              <img src={card} className={styles["side-bar-icon"]} alt="Card Icon" />
               <span>Card</span>           
          </li>
          </Link>

             {/* Analytics (non-navigable) */}
        <li className={`${styles["menu-item"]}`}>
          <img src={chart} className={styles["side-bar-icon"]} alt="Chart Icon" />
          <span>Analytics</span>
        </li>
        </ul>


        <div className={styles.settings}>
          <li
            className={`${styles["menu-item2"]} ${
              activeMenu === "Settings" ? styles.active : ""
            }`}
          >
            <Link to="/settings">
              <img src={gear} className={styles["side-bar-icon"]} alt="Gear Icon" />
              Settings
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;




import React, { useState, useEffect } from "react";
import styles from "./CardDetails.module.css";
import plus from "../../../Images/plus-regular.svg";
import right from "../../../Images/right-sm.svg";
import gear from "../../../Images/gear.svg";
import freeze from "../../../Images/snow.svg";
import cardicon from "../../../Images/CardIcon.svg";
import apple from "../../../Images/apple.svg";
import store from "../../../Images/store.svg";
import x from "../../../Images/x.svg";
import share from "../../../Images/share.svg";
import Copy from "../../../Images/Copy.svg";

const CardDetails = () => {
  const [balance] = useState(2356);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const transactions = [
    {
      name: "APPLE.COM",
      amount: "-$4.00",
      status: "Sent",
      date: "Today",
      icon: apple,
    },
    {
      name: "Card Funding",
      amount: "+$120.00",
      status: "Added",
      date: "18 March, 2024",
      icon: plus,
    },
    {
      name: "MOBBIN.COM",
      amount: "-$2.42",
      status: "Convert",
      date: "10 March, 2024",
      icon: store,
    },
    {
      name: "MOBBIN.COM",
      amount: "-$96.00",
      status: "Convert",
      date: "10 March, 2024",
      icon: store,
    },
  ];

  return (
    <div className={styles.container}>
      {/* Overlay for Mobile Sidebar */}
      {isMobile && showSidebar && (
        <div
          className={styles.overlay}
          onClick={() => setShowSidebar(false)}
        ></div>
      )}

      {/* Main Card Section */}
      <div
        className={`${styles.cardMain} ${
          isMobile && showSidebar ? styles.hidden : ""
        }`}
      >
        <div className={styles.balanceSection}>
          <p className={styles.balanceTitle}>
            Favour's Card<button className={styles.editButton}>Edit</button>
          </p>
          <h2 className={styles.balanceAmount}>
            <sup>****</sup>
            {Math.floor(balance)}
          </h2>
          <div className={styles.actionButtons}>
            <div
              className={styles.action}
              onClick={() => isMobile && setShowSidebar(true)}
            >
              <div className={`${styles.actionIcon} ${styles.send}`}>
                <img src={cardicon} alt="Card Details" />
              </div>
              <p>Card Details</p>
            </div>
            <div className={styles.action}>
              <div className={`${styles.actionIcon} ${styles.add}`}>
                <img src={plus} alt="Add Money" />
              </div>
              <p>Add Money</p>
            </div>
            <div className={styles.action}>
              <div className={`${styles.actionIcon} ${styles.freeze}`}>
                <img src={freeze} alt="Freeze Card" />
              </div>
              <p>Freeze Card</p>
            </div>
            <div className={styles.action}>
              <div className={`${styles.actionIcon} ${styles.settings}`}>
                <img src={gear} alt="Settings" />
              </div>
              <p>Settings</p>
            </div>
          </div>
        </div>

        <div className={styles.transactions}>
          <div className={styles.transactionsHeader}>
            <h3>Recent Transactions</h3>
            <div className={styles.headerRight}>
              <a href="/" className={styles.seeAll}>
                See all{" "}
                <img
                  src={right}
                  className={styles.rightImg}
                  alt="right arrow"
                />
              </a>
            </div>
          </div>
          <ul className={styles.transactionsList}>
            {transactions.map((txn, index) => (
              <li key={index} className={styles.transaction}>
                <div
                  className={`${styles.transactionIcon} ${
                    styles[txn.status.toLowerCase()]
                  }`}
                >
                  <img src={txn.icon} alt={txn.status} />
                </div>
                <div className={styles.transactionDetails}>
                  <p>{txn.name}</p>
                  <span>
                    {txn.status} · {txn.date}
                  </span>
                </div>
                <div className={styles.transactionAmount}>{txn.amount}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sidebar Section */}
      <div
        className={`${styles.cardSidebar} ${
          isMobile
            ? showSidebar
              ? styles.mobileVisible
              : styles.mobileHidden
            : styles.desktopVisible
        }`}
      >
        <div className={styles.sidebarHeader}>
          <h3>Card Details</h3>
          {/* Always render the close button on both mobile and desktop */}
          <button
            className={styles.closeButton}
            onClick={() => setShowSidebar(false)}
          >
            <img src={x} alt="Close" />
          </button>
        </div>
        <div className={styles.sidebarContent}>
          <div className={styles.cardRow}>
            <p className={styles.label}>Card Holder Name:</p>
            <p className={styles.value}>
              Favour Parzival Dumnoi
              <button className={styles.copyButton}>
                <img src={Copy} alt="Copy Icon" />
              </button>
            </p>
          </div>
          <div className={styles.cardRow}>
            <p className={styles.label}>Card Number:</p>
            <p className={styles.value}>
              1927 7429 4790 2356
              <button className={styles.copyButton}>
                <img src={Copy} alt="Copy Icon" />
              </button>
            </p>
          </div>
          <div className={styles.cardRow}>
            <p className={styles.label}>CVV:</p>
            <p className={styles.value}>
              468
              <button className={styles.copyButton}>
                <img src={Copy} alt="Copy Icon" />
              </button>
            </p>
          </div>
          <div className={styles.cardRow}>
            <p className={styles.label}>Expiry Date:</p>
            <p className={styles.value}>
              08/17
              <button className={styles.copyButton}>
                <img src={Copy} alt="Copy Icon" />
              </button>
            </p>
          </div>
          <div className={styles.cardRow}>
            <p className={styles.label}>Zip Code:</p>
            <p className={styles.value}>
              20240
              <button className={styles.copyButton}>
                <img src={Copy} alt="Copy Icon" />
              </button>
            </p>
          </div>
          <div className={styles.cardRow}>
            <p className={styles.label}>Billing Address:</p>
            <p className={styles.value}>
              2nd Floor, Berkeley Square House, <br /> Berkeley Square, US
              <button className={styles.copyButton}>
                <img src={Copy} alt="Copy Icon" />
              </button>
            </p>
          </div>

          <div className={styles.shareCon}>
            <button className={styles.shareButton}>
              <img src={share} alt="share icon" />
              Share Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;


import React from "react";
import styles from "./Transactions.module.css"; // Import the CSS module

const Transactions = () => {
  const transactions = [
    { name: "Favour Dumnoi", amount: "200 GBP", status: "Sent", date: "Today" },
    { name: "EUR Balance", amount: "1400 GBP", status: "Added", date: "Today" },
    { name: "To USD Balance", amount: "629.23 USD", status: "Convert", date: "500 GBP" },
    { name: "Chukwuemeka Dumnoi", amount: "350 GBP", status: "Today" },
  ];

  return (
    <div className={styles.transactions}> {/* Use styles object for class names */}
  <div className={styles.transactionsHeader}>
            <h3>Recent Transactions</h3>
            <div className={styles.headerRight}>
              <a href="/" className={styles.seeAll}>
                See all <img src={right} className={styles.rightImg} alt="right arrow" />
              </a>
            </div>
          </div>
      <ul className={styles.transactionsList}>
        {transactions.map((txn, index) => (
          <li key={index} className={styles.transactionItem}>
            <p>{txn.name}</p>
            <p>{txn.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;

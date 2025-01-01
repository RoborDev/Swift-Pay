import React, { useState } from "react";
import USD from "../../../Images/USD.svg";
import EUR from "../../../Images/EUR.svg";
import NGN from "../../../Images/NGN.svg";
import UK from "../../../Images/UK.svg";
import Up from "../../../Images/Up.svg";
import Up2 from "../../../Images/Up2.svg";
import Down from "../../../Images/Down.svg";
import rightsm from "../../../Images/right-sm.svg";
import Refresh from "../../../Images/Refresh.svg";
import plus from "../../../Images/plus-regular.svg";
import details from "../../../Images/Details.svg";
import styles from './Card.module.css';

function Card({ toggleSideCard }) {
  const [activeCurrency, setActiveCurrency] = useState("GBP");
  const [balance, setBalance] = useState(4000);

  const currencyData = {
    GBP: { symbol: "£", name: "British Pound", balance: 4000 },
    EUR: { symbol: "€", name: "Euro", balance: 3500 },
    USD: { symbol: "$", name: "US Dollar", balance: 5000 },
    NGN: { symbol: "₦", name: "Nigerian Naira", balance: 2000000 },
  };

  const currencies = [
    { code: "GBP", img: UK },
    { code: "EUR", img: EUR },
    { code: "USD", img: USD },
    { code: "NGN", img: NGN },
  ];

  const handleCurrencyChange = (currencyCode) => {
    setActiveCurrency(currencyCode);
    setBalance(currencyData[currencyCode].balance);
  };

  const transactions = [
    { name: "Favour Dumnoi", amount: "200", currency: activeCurrency, status: "Sent", date: "Today", icon: Up2 },
    { name: "EUR Balance", amount: "1400", currency: activeCurrency, status: "Added", date: "Today", icon: plus },
    { name: "To USD Balance", amount: "629.23", currency: "USD", status: "Convert", date: "Today", icon: Refresh },
    { name: "Chukwuemeka Dumnoi", amount: "350", currency: activeCurrency, status: "Sent", date: "Today", icon: Down },
  ];

  return (
    <div className={styles.cardMain}>
      {/* Currency Tabs */}
      <div className={styles.currencyTabs}>
        {currencies.map(({ code, img }) => (
          <span
            key={code}
            className={`${styles.currency} ${activeCurrency === code ? styles.active : ""}`}
            onClick={() => handleCurrencyChange(code)}
          >
            <img src={img} alt={`${code} flag`} /> {code}
          </span>
        ))}
      </div>

      {/* Balance Section */}
      <div className={styles.balanceSection}>
        <p className={styles.balanceTitle}>{currencyData[activeCurrency].name} Balance</p>
        <h2 className={styles.balanceAmount}>
          <sup>{currencyData[activeCurrency].symbol}</sup>
          {Math.floor(balance)}
          <span className={styles.decimal}>.{(balance % 1).toFixed(2).substring(2)}</span>
        </h2>

        {/* Action Buttons */}
        <div className={styles.actionButtons}>
          <div className={styles.action}>
            <div className={`${styles.actionIcon} ${styles.send}`}>
              <img src={Up} alt="Send" />
            </div>
            <p>Send</p>
          </div>
          <div className={styles.action}>
            <div className={`${styles.actionIcon} ${styles.add}`}>
              <img src={plus} alt="Add" />
            </div>
            <p>Add</p>
          </div>
          <div className={styles.action}>
            <div className={`${styles.actionIcon} ${styles.convert}`}>
              <img src={Refresh} alt="Convert" />
            </div>
            <p>Convert</p>
          </div>


          <div className={`${styles.action} ${styles.details}`}>
          <div
              className={`${styles.actionIcon} ${styles.convert}`}
              onClick={toggleSideCard}
            >
            <img src={details} className={styles.detailsImage} alt="Details" />
            </div>
            <p>Details</p>
          </div>
        </div>
      </div>

      {/* Recent Transactions Section */}
      <div className={styles.transactions}>
        <div className={styles.transactionsHeader}>
          <h3>Recent Transactions</h3>
          <div className={styles.headerRight}>
            <a href="/" className={styles.seeAll}>
              See all <img src={rightsm} alt="See All" />
            </a>
          </div>
        </div>
        <ul className={styles.transactionsList}>
          {transactions.map((txn, index) => (
            <li key={index} className={styles.transaction}>
              <div className={`${styles.transactionIcon} ${styles[txn.status.toLowerCase()]}`}>
                <img src={txn.icon} alt={txn.status} />
              </div>
              <div className={styles.transactionDetails}>
                <p>{txn.name}</p>
                <span>{txn.status} · {txn.date}</span>
              </div>
              <div className={styles.transactionAmount}>
                {txn.amount} {txn.currency}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Card;

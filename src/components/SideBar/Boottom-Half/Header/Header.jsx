import React from 'react';
import styles from "./Header.module.css";

function Header({ title, content }) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>{title}</h1>
        {content}
      </div>
   
    </div>
  );
}

export default Header;

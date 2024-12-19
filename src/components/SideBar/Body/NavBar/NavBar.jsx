import React from 'react';
import Avatar from "../../../../Images/Avatar.svg";
import Vector from "../../../../Images/Vector.svg";
import styles from "./NavBar.module.css"; // Import the CSS module

const Navbar = ({ title, subtitle }) => {
  return (
    <nav className={styles.navbar}> {/* Use styles from the module */}
      <div className={styles.leftSection}> {/* Use the correct class name */}
        <h1 className={styles.navbarTitle}>{title}</h1>
        <p className={styles.navbarSubtitle}>{subtitle}</p>
      </div>
      <div className={styles.rightSection}> {/* Use the correct class name */}
        <img src={Vector} alt="Notification Icon" className={styles.navbarIcon} />
        <img src={Avatar} alt="User Avatar" className={styles.navbarAvatar} />
      </div>
    </nav>
  );
};

// Define default props for the Navbar component
Navbar.defaultProps = {
  title: "Accounts",
  subtitle: "Welcome back, Favour Dumnoi!",
};

export default Navbar;

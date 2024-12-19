
import React from 'react';
import Header from './Header/Header';
import Balance from '../Body/Balance/Balance';
import styles from './BottomHalf.module.css'; // Import the CSS module

function BottomHalf() {
  return (
    <div className={styles.appContainer}> {/* Use the class from the module */}
      <Balance /> 
    </div>
  );
}

export default BottomHalf;

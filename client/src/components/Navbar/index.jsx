// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";

const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
};

function Navbar() {
    return (
      <nav className={styles.navbar}> {/* Apply the navbar class from the module */}
        <ul className={styles.navList}> {
        <span className={styles.companyName}>Your Company Name</span>/* Apply the navList class from the module */}
          <li className={styles.navItem} > {/* Apply the navItem class from the module */}
            <Link to="/dashboard">
              <i className={styles.navItem} aria-hidden="true"></i> Dashboard
            </Link>
          </li>
          <li className={styles.navItem}> {/* Apply the navItem class from the module */}
            <Link to="/language">Home</Link>
          </li>
          <li className={`${styles.navIcon}`}> {/* Apply the navItem class from the module */}
            <button onClick={handleLogout} className={`${styles.logout} ${styles.navButton}`}>
              Logout
            </button>
          </li>
          
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
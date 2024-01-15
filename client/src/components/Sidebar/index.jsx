// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";

function Sidebar() {
    return (
      <div className={styles.sidebar}> 
        <ul className={styles.sidebarList}> 
          <li className={styles.moduleItem}> 
            <Link to="/moduleone">
              <span className={styles.moduleName}>Module 1</span> 
            </Link>
          </li>
          <li className={styles.moduleItem}> 
            <Link to="/moduletwo">
              <span className={styles.moduleName}>Module 2</span>
            </Link>
          </li>
          <li className={styles.moduleItem}> 
            <Link to="/modulethree">
              <span className={styles.moduleName}>Module 3</span>
            </Link>
          </li>
          <li className={styles.moduleItem}> 
            <Link to="/modulefour">
              <span className={styles.moduleName}>Module 4</span>
            </Link>
          </li>
        </ul>
      </div>
    );
}

export default Sidebar;

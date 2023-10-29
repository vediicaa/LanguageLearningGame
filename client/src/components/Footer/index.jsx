// Footer.js
import React from 'react';
import styles from './styles.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>Created by Mohd Meraj</p>
        <p>© 2023 IIIT Naya Raipur</p>
      </div>
      <div className={styles.links}>
        <a href="https://github.com/meraj-007" target='_blank'><img className={styles.footerImg} src='github.png' /></a>
        <a href="https://www.linkedin.com/in/mohd-meraj/" target='_blank'><img className={styles.footerImg} style={{"width":"20px"}} src='linkedin.png' /></a>
        <a href="https://www.instagram.com/__meraj__007__/" target='_blank'><img className={styles.footerImg} style={{"width":"20px"}} src='insta.webp' /></a>
        
      </div>
    </footer>
  );
}

export default Footer;

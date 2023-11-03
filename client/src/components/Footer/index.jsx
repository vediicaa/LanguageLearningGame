// Footer.js
import React from 'react';
import styles from './styles.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>Created by Vedica Mishra</p>
        <p>© 2023 IIIT, Naya Raipur</p>
      </div>
      <div className={styles.links}>
        <a href="https://github.com/vediicaa" target='_blank'><img className={styles.footerImg} src='github.png' /></a>
        <a href="https://www.linkedin.com/in/vedica-mishra-417ab3221/" target='_blank'><img className={styles.footerImg} style={{"width":"20px"}} src='linkedin.png' /></a>
        <a href="https://www.instagram.com/vediicaa/" target='_blank'><img className={styles.footerImg} style={{"width":"20px"}} src='insta.webp' /></a>
        
      </div>
    </footer>
  );
}

export default Footer;

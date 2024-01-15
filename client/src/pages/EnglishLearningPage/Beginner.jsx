// BeginnersPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './Beginner.module.css'; // Import styles specific to BeginnersPage

const BeginnersPage = () => {
  return (
    <div>
      <Navbar/>
      <div className={styles.container}>
       
      <h1 className={styles.title}>Welcome to Beginners Page</h1>
      <div className={styles.moduleSelection}>
        <Link to="moduleone" className={styles.moduleLink}>
          <div className={styles.moduleCard}>
            <h2 className={styles.moduleTitle}>Module One</h2>
            <p className={styles.moduleDescription}>Matching Words</p>
          </div>
        </Link>

        <Link to="moduletwo" className={styles.moduleLink}>
          <div className={styles.moduleCard}>
            <h2 className={styles.moduleTitle}>Module Two</h2>
            <p className={styles.moduleDescription}>Fill in the Blanks</p>
          </div>
        </Link>

        <Link to="modulethree" className={styles.moduleLink}>
          <div className={styles.moduleCard}>
            <h2 className={styles.moduleTitle}>Module Three</h2>
            <p className={styles.moduleDescription}>Pronunciation</p>
          </div>
        </Link>

        <Link to="modulefour" className={styles.moduleLink}>
          <div className={styles.moduleCard}>
            <h2 className={styles.moduleTitle}>Module Four</h2>
            <p className={styles.moduleDescription}>Chatroom</p>
          </div>
        </Link>

      </div>
      <Footer/>
    </div>
    </div>
    
  );
};

export default BeginnersPage;

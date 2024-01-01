// BeginnersPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MatchingWords from '../../components/BeginnersModule/ModuleOne';
import FillInTheBlanks from '../../components/BeginnersModule/ModuleTwo';
import Pronunciation from '../../components/BeginnersModule/ModuleThree';
import styles from './Beginner.module.css'; // Import styles specific to BeginnersPage
const BeginnersPage = () => {
  return (
    <div className={styles.container}>
        <Navbar/>
      <h1>Welcome to Beginners Page</h1>
      <div className={styles.moduleSelection}>
        <Link to="moduleone" className={styles.moduleLink}>
          <div className={styles.moduleCard}>
            <h2>Module One</h2>
            <p>Matching Words</p>
          </div>
        </Link>

        <Link to="moduletwo" className={styles.moduleLink}>
          <div className={styles.moduleCard}>
            <h2>Module Two</h2>
            <p>Fill in the Blanks</p>
          </div>
        </Link>

        <Link to="modulethree" className={styles.moduleLink}>
          <div className={styles.moduleCard}>
            <h2>Module Three</h2>
            <p>Pronunciation</p>
          </div>
        </Link>

        <Link to="modulefour" className={styles.moduleLink}>
          <div className={styles.moduleCard}>
            <h2>Module Four</h2>
            <p>Chatroom</p>
          </div>
        </Link>
      </div>
      <Footer/>
    </div>
  );
};

export default BeginnersPage;

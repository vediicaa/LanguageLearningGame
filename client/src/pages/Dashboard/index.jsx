import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./styles.module.css";
import Navbar from '../../components/Navbar'; 
import Footer from '../../components/Footer'; 
const storedToken = localStorage.getItem("token");



function Dashboard() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8080/api/auth',{
            headers:{
              'Authorization': `Bearer ${storedToken}`
            }
          })
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user info:', error);
      });
  }, []);



  return (
    <div>
    <Navbar />
    <div class={styles.mainContainer}>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Welcome {userInfo?.firstName + " " + userInfo?.lastName}
        </h1>
        <div className={styles.languageDetails}>
          <p className={styles.langItem}>English Rating: {userInfo.ratingEng}</p>
          <p className={styles.langItem}>French Rating: {userInfo.ratingFrench}</p>
          <p className={styles.langItem}>Italian Rating: {userInfo.ratingItalian}</p>
          <p className={styles.langItem}>Spanish Rating: {userInfo.ratingSpanish}</p>
          <p className={styles.langItem}>German Rating: {userInfo.ratingGerman}</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default Dashboard;

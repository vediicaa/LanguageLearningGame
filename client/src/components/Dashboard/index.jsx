import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./styles.module.css";
import Navbar from '../Navbar'; 
import Footer from '../Footer'; 
const storedToken = localStorage.getItem("token");



function Dashboard() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    axios.get('https://trial3-production.up.railway.app/api/auth',{
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

  const handleResetRatings = (userId) => {
    // Implement logic to reset ratings
    // Make a PUT request to reset user ratings
    axios.put(`https://trial3-production.up.railway.app/api/reset-ratings/${userId}`)
      .then((response) => {
        console.log('Ratings reset successfully');
        // Fetch user info again after resetting ratings
        axios.get('https://trial3-production.up.railway.app/api/auth',{
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
      })
      .catch((error) => {
        console.error('Error resetting ratings:', error);
      });
  };

  return (
    <div>
    <Navbar />
    <div class={styles.mainContainer}>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Welcome {userInfo?.firstName + " " + userInfo?.lastName}
        </h1>
        {/* <div className={styles.userDetails}>
          <p>First Name: {userInfo.firstName}</p>
          <p>Last Name: {userInfo.lastName}</p>
          <p>Email: {userInfo.email}</p>
        </div> */}
        <div className={styles.languageDetails}>
          <p className={styles.langItem}>English Rating: {userInfo.ratingEng}</p>
          <p className={styles.langItem}>French Rating: {userInfo.ratingFrench}</p>
          <p className={styles.langItem}>Italian Rating: {userInfo.ratingItalian}</p>
          <p className={styles.langItem}>Spanish Rating: {userInfo.ratingSpanish}</p>
          <p className={styles.langItem}>German Rating: {userInfo.ratingGerman}</p>
        </div>
        <button  className={styles.resetButton}>
          Reset Ratings
        </button>
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default Dashboard;

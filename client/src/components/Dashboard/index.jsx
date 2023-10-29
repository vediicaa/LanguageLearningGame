import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./styles.module.css";
import Navbar from '../Navbar'; 
import Footer from '../Footer'; 
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

  const handleResetRatings = () => {
    // Implement logic to reset ratings
    // Make a PUT request to reset user ratings
    axios.put('http://localhost:8080/api/reset-ratings')
      .then((response) => {
        console.log('Ratings reset successfully');
        // Fetch user info again after resetting ratings
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
      })
      .catch((error) => {
        console.error('Error resetting ratings:', error);
      });
  };

  return (
    <div>
        <Navbar/>
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to the Dashboard</h1>
      <div className={styles.userDetails} >
        <p>First Name: {userInfo.firstName}</p>
        <p>Last Name: {userInfo.lastName}</p>
        <p>Email: {userInfo.email}</p>
        </div>
        <div className={styles.languageDetails}>
        <p>User's rating in English: {userInfo.ratingEng}</p>
        <p>User's rating in French: {userInfo.ratingFrench}</p>
        <p>User's rating in Italian: {userInfo.ratingItalian}</p>
        <p>User's rating in Spanish: {userInfo.ratingSpanish}</p>
        <p>User's rating in German: {userInfo.ratingGerman}</p>
        </div>
      <button onClick={handleResetRatings} className={styles.resetButton}>Reset Ratings</button>
    </div>
    <Footer/>
    </div>
  );
}

export default Dashboard;

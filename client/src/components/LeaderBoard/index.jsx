import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./styles.module.css";
import Navbar from '../Navbar'; 
import Footer from '../Footer'; 
const storedToken = localStorage.getItem("token");

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the leaderboard data when the component mounts
    axios.get('https://trial3-production.up.railway.app/api/leaderboard')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching leaderboard data:', error);
      });
  }, []);

  return (
    <div>
        <Navbar/>
    <div className="leaderboard-container">
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.firstName}</td>
              <td>{user.ratingEng}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer/>
    </div>
  );
};


export default Leaderboard;

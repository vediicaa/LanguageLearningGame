import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function LanguageSelection() {
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  useEffect(() => {
    
    axios.get('http://localhost:8080/api/language') 
      .then((response) => {
        console.log("received languages");
      setLanguages(response.data);
      })
      .catch((error) => {
        console.error('Error fetching languages:', error);
      });
  }, []);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const handleStartLearning = () => {
    if(selectedLanguage === 'English')
    {
      window.location = '/english';
    }
    if(selectedLanguage === 'Spanish')
    {
      window.location = '/spanish';
    }
    if(selectedLanguage === 'French')
    {
      window.location = '/french';
    }
    if(selectedLanguage === 'German')
    {
      window.location = '/german';
    }
    if(selectedLanguage === 'Italian')
    {
      window.location = '/italian';
    }
  }
  return (
    <div>
    <Navbar/>
  
  <div className={styles.mainContainer}>
    <div className={styles.container}>
      <h1>Select a Language</h1>
      <ul className={styles.languageList}>
        {languages.map((language) => (
          <li key={language} className={styles.languageItem}>
            <label>
              <input
                type="radio"
                name="language"
                value={language}
                checked={selectedLanguage === language}
                onChange={() => handleLanguageSelect(language)}
              />
              {language}
            </label>
          </li>
        ))}
      </ul>
      <button onClick ={handleStartLearning} className={styles.startButton}>
        Start Learning
      </button>
    </div>
  </div>
  <Footer/>
  </div>
  );
}

export default LanguageSelection;

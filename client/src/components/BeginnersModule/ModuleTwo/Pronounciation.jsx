import React, { useState, useEffect } from 'react';
import Speech from 'react-speech';
import styles from './Pronounciation.module.css'
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Sidebar from '../../Sidebar';
const Pronounciation = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const [currentLetter, setCurrentLetter] = useState('');
  const [options, setOptions] = useState([]);
  const [turns, setTurns] = useState(0); // Add this line

  // Function to generate a random letter
  const generateRandomLetter = () => {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  };

  // Function to generate options
  const generateOptions = (correctLetter) => {
    let tempOptions = [correctLetter];
    while (tempOptions.length < 4) {
      const randomLetter = generateRandomLetter();
      if (!tempOptions.includes(randomLetter)) {
        tempOptions.push(randomLetter);
      }
    }
    
    setOptions(tempOptions);
  };

  useEffect(() => {
    const firstLetter = generateRandomLetter();
    setCurrentLetter(firstLetter);
    generateOptions(firstLetter);
  }, []);

  const handleOptionClick = (letter) => {
    if (letter === currentLetter) {
      alert('Correct!');
      setTurns(turns + 1); 
      if (turns >= 5) { 
        alert('Quiz completed!');
        return; 
      }
    
      const nextLetter = generateRandomLetter();
      setCurrentLetter(nextLetter);
      generateOptions(nextLetter);
    } else {
      alert('Incorrect, try again.');
    }
  };

  return (
    <div>
       <Navbar/>
       <Sidebar/>
          <div className={styles.alphabetQuiz}>
      <h1>Alphabet Quiz</h1>
      <h3>This module tests your hearing skills press on play to hear the alphabet!</h3>
      <div className={styles.playButton}>
        <Speech text={currentLetter} textAsButton={true} displayText="Play" />
      </div>
      {options.map((letter, index) => (
        <button key={index} className={styles.button}
          onClick={() => handleOptionClick(letter)}>
          {letter.toUpperCase()}
        </button>
      ))}
      <Footer/>
    </div>
    </div>
  );
};

export default Pronounciation;

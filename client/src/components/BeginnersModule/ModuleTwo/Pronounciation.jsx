import React, { useState, useEffect } from 'react';
import Speech from 'react-speech';
import styles from './Pronounciation.module.css'
import Navbar from '../../Navbar';
import Footer from '../../Footer';

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
    // Shuffle the options
    tempOptions.sort(() => Math.random() - 0.5);
    setOptions(tempOptions);
  };

  // On component mount, generate the first letter and options
  useEffect(() => {
    const firstLetter = generateRandomLetter();
    setCurrentLetter(firstLetter);
    generateOptions(firstLetter);
  }, []);

  const handleOptionClick = (letter) => {
    if (letter === currentLetter) {
      alert('Correct!');
      setTurns(turns + 1); // Add this line
      if (turns >= 5) { // Add this line
        alert('Quiz completed!');
        return; // Add this line
      }
      // Generate a new letter and options
      const nextLetter = generateRandomLetter();
      setCurrentLetter(nextLetter);
      generateOptions(nextLetter);
    } else {
      alert('Incorrect, try again.');
    }
  };

  return (
    <div className={styles.alphabetQuiz}>
      <Navbar/>
      <h1>Alphabet Quiz</h1>
      <Speech text={currentLetter} textAsButton={true} displayText="Play" />
      {options.map((letter, index) => (
        <button key={index} className={styles.button}
          onClick={() => handleOptionClick(letter)}>
          {letter.toUpperCase()}
        </button>
      ))}
      <Footer/>
    </div>
  );
};

export default Pronounciation;

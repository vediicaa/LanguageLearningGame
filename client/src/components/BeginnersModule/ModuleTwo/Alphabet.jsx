import React from 'react';
import Speech from 'react-speech';
import styles from './Alphabet.module.css';

const AlphabetChart = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const words = [
    'Apple', 'Ball', 'Cat', 'Dog', 'Elephant', 'Fish', 'Goat', 'Horse',
    'Iguana', 'Jellyfish', 'Kangaroo', 'Lion', 'Monkey', 'Nightingale',
    'Ostrich', 'Penguin', 'Quail', 'Rabbit', 'Snake', 'Tiger',
    'Umbrella', 'Vase', 'Whale', 'Xylophone', 'Yak', 'Zebra'
  ];
  const handleNextClick = () => {
    window.location = 'moduletwo/quiz';
  };
  return (
    <div className={styles.alphabetChart}>
      {alphabet.map((letter, index) => (
        <div key={index} className ={styles.card}>
          <img 
            src={`path/to/${words[index].toLowerCase()}.jpg`} 
            alt={words[index]} 
          />
          <p>{`${letter.toUpperCase()} for ${words[index]}`}</p>
          <Speech 
            text={`${letter.toUpperCase()} for ${words[index]}`} 
            textAsButton={true} 
            displayText="Pronounce" 
          />
        </div>
      ))}
         <button className={styles.nextButton} onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default AlphabetChart;

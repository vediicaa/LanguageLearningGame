import React, { useState, useEffect } from 'react';
import styles from './MatchingExercise.module.css' // Import the CSS module here
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const MatchingExercise = () => {
  const alphabetItems = [
    { letter: 'A', word: 'Apple', image: '/path/to/apple/image' },
    // Add all items here
  ];
  const [currentItem, setCurrentItem] = useState(alphabetItems[0]);
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userInput.toLowerCase() === currentItem.word.toLowerCase()) {
      alert('Correct!');
      // Move on to the next item
      const nextIndex = alphabetItems.indexOf(currentItem) + 1;
      if (nextIndex < alphabetItems.length) {
        setCurrentItem(alphabetItems[nextIndex]);
        setUserInput('');
      } else {
        alert('Exercise completed!');
      }
    } else {
      alert('Incorrect, try again.');
    }
  };

  return (
    <div className={styles.matchingExercise}> {/* Apply the class here */}
      <Navbar/>
      <h1>Matching Exercise</h1>
      <img src={currentItem.image} alt={currentItem.word} />
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      <Footer/>
    </div>
  );
};

export default MatchingExercise;

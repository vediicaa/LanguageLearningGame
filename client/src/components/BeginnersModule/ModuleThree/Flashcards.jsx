// FlashcardQuiz.jsx

import React, { useState } from 'react';
import styles from './Flashcards.module.css';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import ReactCardFlip from 'react-card-flip'
import Sidebar from '../../Sidebar';
const FlashcardQuiz = () => {
    const prepositions = [

            { name: 'this', image: '/path/to/this/image', sentence: '____ is my book.' },
            { name: 'that', image: '/path/to/that/image', sentence: '____ is your car.' },
            { name: 'under', image: '/path/to/under/image', sentence: 'The cat is ___ the table.' },
            { name: 'above', image: '/path/to/above/image', sentence: 'The bird is flying ____ the tree.' },
            { name: 'behind', image: '/path/to/behind/image', sentence: 'The ball is ____ the box.' },
            { name: 'in', image: '/path/to/in/image', sentence: 'The cookies are ___ the jar.' },
            { name: 'on', image: '/path/to/on/image', sentence: 'The book is ___ the table.' },
            { name: 'over', image: '/path/to/over/image', sentence: 'The bird flew ____ the house.' },
            { name: 'through', image: '/path/to/through/image', sentence: 'The train goes ____ the tunnel.' },
            { name: 'around', image: '/path/to/around/image', sentence: 'The dog ran ____ the tree.' },
            { name: 'between', image: '/path/to/between/image', sentence: 'The treasure is hidden _____ the rocks.' },
            { name: 'among', image: '/path/to/among/image', sentence: 'She is standing _____ the trees.' }
            // Add more prepositions as needed
        ];

        const [currentIndex, setCurrentIndex] = useState(0);
        const [isFlipped, setIsFlipped] = useState(false);
    
        const handleNextClick = () => {
            
                setCurrentIndex(currentIndex + 1);
                setIsFlipped(false);
        };
    
        const handleFlipClick = () => {
            setIsFlipped(!isFlipped);
        };
    
        return (
            <div>
                <Navbar/>
                <Sidebar/>
                <div className={styles.flashcardQuiz}>
                {currentIndex < prepositions.length ? (
                    
                    <React.Fragment>
                        <h2>Weclome to the quiz! Press on the flashcard to know the correct ans!</h2>
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                            <div className={styles.card} onClick={handleFlipClick}>
                                <p>{prepositions[currentIndex].sentence}</p>
                            </div>
    
                            <div className={styles.card} onClick={handleFlipClick}>
                                <p>{prepositions[currentIndex].name}</p>
                            </div>
                        </ReactCardFlip>
                        <button onClick={handleNextClick}>Next</button>
                    </React.Fragment>
                ) : (
                    <h2>Quiz is over. Well done!</h2>
                )}
                <Footer/>
            </div>
            </div>
        );
    };
    
    export default FlashcardQuiz;
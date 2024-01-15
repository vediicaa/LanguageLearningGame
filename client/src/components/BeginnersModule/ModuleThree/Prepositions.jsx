// Preposition.jsx

import React from 'react';
import Speech  from 'react-speech';
import styles from './Prepositions.module.css';

const Preposition = () => {
    const prepositions = [
        { name: 'this', image: '/path/to/this/image', sentence: 'This is my book.' },
        { name: 'that', image: '/path/to/that/image', sentence: 'That is your car.' },
        { name: 'under', image: '/path/to/under/image', sentence: 'The cat is under the table.' },
        { name: 'above', image: '/path/to/above/image', sentence: 'The bird is flying above the tree.' },
        { name: 'behind', image: '/path/to/behind/image', sentence: 'The ball is behind the box.' },
        { name: 'in', image: '/path/to/in/image', sentence: 'The cookies are in the jar.' },
        { name: 'on', image: '/path/to/on/image', sentence: 'The book is on the table.' },
        { name: 'over', image: '/path/to/over/image', sentence: 'The bird flew over the house.' },
        { name: 'through', image: '/path/to/through/image', sentence: 'The train goes through the tunnel.' },
        { name: 'around', image: '/path/to/around/image', sentence: 'The dog ran around the tree.' },
        { name: 'between', image: '/path/to/between/image', sentence: 'The treasure is hidden between the rocks.' },
        { name: 'among', image: '/path/to/among/image', sentence: 'She is standing among the trees.' }
    ];

    const handleNextClick = () => {
        window.location.href = 'modulethree/flashcards';
    };

    return (
        <div className={styles.preposition}>
            {prepositions.map((preposition, index) => (
                <div key={index} className={styles.card}>
                    <img src={preposition.image} alt={preposition.name} />
                    <p>{preposition.name}</p>
                    <Speech text={preposition.sentence} textAsButton={true} displayText="Play" />
                </div>
            ))}
            <button onClick={handleNextClick}>Next</button>
        </div>
    );
};

export default Preposition;

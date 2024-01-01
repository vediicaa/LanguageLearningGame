import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableItem from './DraggableItem';
import DroppableContainer from './DroppableContainer';
import styles from './styles.module.css';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const MemoryGame = () => {
  const [timer, setTimer] = useState(120);
  const [showQuiz, setShowQuiz] = useState(false);
  const [imageSet, setImageSet] = useState(0);

  const handleDrop = (item) => {
    console.log(`Dropped item with id ${item.id}`);
    if(exerciseSolved(item.id))
    {
      setShowQuiz(false);
      setImageSet(imageSet+1);
      setTimer(120);
    }
  };

  const exerciseSolved= (id)=>{
    if(id) return true;
    else return false;
  };

  const imageSets = [
    [{ id: 1, name: 'Image 1', src: 'path/to/image1' },
    { id: 2, name: 'Image 2', src: 'path/to/image2' },
    { id: 3, name: 'Image 3', src: 'path/to/image2' },
    { id: 4, name: 'Image 4', src: 'path/to/image2' },
    { id: 5, name: 'Image 5', src: 'path/to/image2' },
    { id: 6, name: 'Image 6', src: 'path/to/image2' }
  ],
  [
    { id: 7, name: 'Image 1', src: 'path/to/image1' },
    { id: 8, name: 'Image 2', src: 'path/to/image2' },
    { id: 9, name: 'Image 3', src: 'path/to/image2' },
    { id: 10, name: 'Image 4', src: 'path/to/image2' },
    { id: 11, name: 'Image 5', src: 'path/to/image2' },
    { id: 12, name: 'Image 6', src: 'path/to/image2' }
  ],
  [
    { id: 13, name: 'Image 1', src: 'path/to/image1' },
    { id: 14, name: 'Image 2', src: 'path/to/image2' },
    { id: 15, name: 'Image 3', src: 'path/to/image2' },
    { id: 16, name: 'Image 4', src: 'path/to/image2' },
    { id: 17, name: 'Image 5', src: 'path/to/image2' },
    { id: 18, name: 'Image 6', src: 'path/to/image2' }
  ]
];
   
  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        setShowQuiz(true);
        clearInterval(countdown);
      }
    }, 100);
    return () => clearInterval(countdown);
  }, [timer]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.memoryGame}>
        <Navbar/>
        <div className={styles.timer}>Time remaining: {timer} seconds</div>
        {imageSet < imageSets.length ? (
          !showQuiz ? (
            <div className={styles.imageCards}>
              {imageSets[imageSet].map((image) => (
                <div key={image.id} className={styles.imageCard}>
                  <img src={image.src} alt={image.name} />
                  <div>{image.name}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.quiz}>
              {imageSets[imageSet].map((image) => (
                <DraggableItem key={image.id} id={image.id} name={image.name} />
              ))}
              <DroppableContainer accept="item" onDrop={handleDrop}>
                Drop items here
              </DroppableContainer>
            </div>
          )
        ) : (
          <div className={styles.completionMessage}>
            Exercise completed! Great job!
          </div>
        )}
        <Footer/>
      </div>
    </DndProvider>
  );  
};

export default MemoryGame;

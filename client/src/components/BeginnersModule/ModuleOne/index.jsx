// MemoryGame.js
import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableItem from './DraggableItem';
import DroppableContainer from './DroppableContainer';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import style from './styles.module.css';
import Sidebar from '../../Sidebar';
import axios from 'axios';

const MemoryGame = () => {
  const [sentence, setSentence] = useState('');
  const [ansItem, setAnsItem] = useState('');
  const [ansPerson, setAnsPerson] = useState('');
  const [items, setItems] = useState([]);
  const [droppedItems, setDroppedItems] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [timer, setTimer] = useState(5);
  const [images, setImage] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    
    const fetchItems = async() =>{
      try{
        const response = await axios.get('http://localhost:8080/api/moduleOne');
        console.log(response.data);
        setData(response.data);
      }
      catch(error)
      {
        console.error('Failed to fetch items:', error);
      }
    };

    fetchItems();
  }, []);

  useEffect(()=>{
    if(currentIndex < data.length)
    {
      const currentItem = data[currentIndex];
      setItems(currentItem.items);
      setSentence(currentItem.sentence);
      setImage(currentItem.images);
      setAnsPerson(currentItem.ansPerson);
      setAnsItem(currentItem.ansItem);

    }
    else
    {
      console.log('questions finished');
    }
  },[currentIndex]);


  const nextItem = ()=>{
    setCurrentIndex(currentIndex+1);
  };
  
  //setting up a repeating function to update the state of the timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer > 0 ? prevTimer - 1 : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setShowQuiz(true);
    }
  }, [timer]);

  const handleDrop = (item, person) => {
    console.log(item);
    console.log(person);
    setDroppedItems([...droppedItems, { ...item, person }]);
    checkAnswer(item, person);
  };

  const checkAnswer = (item, person) => {
    console.log(item);
    console.log(person);
    if (item.name === ansItem && person === ansPerson) {
      alert('Correct!');
      setShowQuiz(false);
      setTimer(120);
      nextItem();
    } else {
      alert('Try again!');
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
      <Navbar/>
       <Sidebar/>
       <div className={style.game}>
        {showQuiz ? (
          <div className={style.container}>
            <div className={style.items}>
              <p>Hello</p>
              {items.filter(item => item.type === 'item').map((item) => (
                <DraggableItem key={item.id} id={item.id} name={item.name} src={item.src} />
              ))}
            </div>
            <h1 className={style.sentence}>{sentence}</h1>
            <div className={style.persons}>
              {items.filter(item => item.type === 'person').map((person) => (
                <DroppableContainer key={person.id} accept="item" onDrop={(item) => handleDrop(item, person.name)}>
                  <img src={person.src} alt={person.name} />
                </DroppableContainer>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className={style.timer}>Time remaining: {timer} seconds</div>
           
          <div className={style.images}>               
            {images.map((image, index) => (
              <div key={index}>
                <img src={image.src} alt={image.caption} />
                <p>{image.caption}</p>
                <p>hello</p>
              </div>
            ))}
          </div>
          </div>
          
        )}
      </div>
      <Footer/>
      </div>
    </DndProvider>
  );
};

export default MemoryGame;

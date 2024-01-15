import React from "react";
import styles from './level.module.css';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const LevelSelection =({onSelectLevel}) =>{
    const handleLevelSelect = (level) =>{
        //onSelectLevel(level);
        console.log(level)
        window.location = `${level}`;
    };

    return(
        <div  class={styles.container}>
            <Navbar/>
            <h2>Select you english Proficiency Level</h2>
            <div>
            <button onClick = {() =>handleLevelSelect('beginner')}> Beginner</button>
            <button onClick = {() =>handleLevelSelect('Intermediate')}> Intermediate</button>
            <button onClick = {() =>handleLevelSelect('Advanced')}> Advanced</button>
            </div>
            <Footer/>
        </div>
    );
};

export default LevelSelection;
import React from "react";
import Navbar from '../../../components/Navbar'; 
import Footer from '../../../components/Footer'; 
import SpeechRecog from './SpeechRecognition'
import Sidebar from "../../Sidebar";
import styles from "./styles.module.css"

const ModuleOne = () =>{
    return (
        <div>
            <Navbar/>
        <div className={styles.container}>
            <Sidebar/>
            <h1 className={styles.title}>Welcome to Module Four</h1>
            <h3 className={styles.subtitle}>This module tests your speaking skills, repeat the current sentence!</h3>
            <p className={styles.instructions}>Press on start to record your voice and stop when you done. All the best!</p>
            <SpeechRecog/>
           
        </div>
        <Footer/>
        </div>

        );
};

export default ModuleOne;

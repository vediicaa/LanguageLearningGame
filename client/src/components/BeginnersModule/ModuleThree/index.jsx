import React from "react";
import Navbar from '../../../components/Navbar'; 
import Footer from '../../../components/Footer'; 
import Preposition from "./Prepositions";
import Sidebar from "../../Sidebar";
const ModuleOne = () =>{
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <h1>Welcome to Module Three</h1>
            <Preposition/>
            <Footer/>
        </div>
        );
};

export default ModuleOne;


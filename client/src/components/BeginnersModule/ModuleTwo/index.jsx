import React from "react";
import Navbar from '../../Navbar'; 
import Footer from '../../Footer'; 
import Alphabet from "./Alphabet";
import Sidebar from "../../Sidebar";
const ModuleTwo = () =>{
    return (
        <div>
            <Navbar/>
             <div>
            <Sidebar/>
            <h1>Welcome to Module 2</h1>
            <Alphabet/>
            <Footer/>
        </div>
        </div>
        );
};

export default ModuleTwo;


import React from 'react';
import iPhone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png";
//import HoldingIphone from "../assets/images/bg1.png";
import { Route, BrowserRouter as Router, Routes, redirect, NavLink } from "react-router-dom";
import '../css/index2.css';

function Jumbotron() {

    const handleLearnMore = () => {
        const element = document.querySelector(".sound-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="jumbotron-section wrapper">
            <h2 className="title">Welcome to your one stop solution</h2>
            <p className="text">KODING CIRCLE</p>
            <span className="description">
                We specializes in building custom website and app that will make you client fall in love with your business.
            </span>
            <ul className="links">
                <li>
                    <a className="link" onClick={handleLearnMore} >Learn more</a>
                </li>
                <li>
                <NavLink to='/about'>
                    <button className="button" >About Us</button>
                </NavLink>
                </li>
            </ul>
            <img className="iphone-img" src={HoldingIphone} alt="iPhone" />
        </div>

    );
}

export default Jumbotron;


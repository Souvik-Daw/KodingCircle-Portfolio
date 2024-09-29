import React from 'react';
import { Route, BrowserRouter as Router, Routes, redirect, NavLink } from "react-router-dom";
import '../css/index2.css';

function SoundSection() {

    const handleLearnMore = () => {
        const element = document.querySelector(".display-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().bottom,
            left: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="sound-section wrapper">
            <div className="body">
                <div className='sound-section-content content' >
                    <h2 className="title">We are the best</h2>
                    <p className="text">But Dont take out word for it</p>
                    <span className="description">
                        See more about us also check out our portfolio and customer review
                    </span>
                    <ul className="links">
                        <NavLink to='/projects'>
                            <li>
                                <a className="button"> Portfolio</a>
                            </li>
                        </NavLink>
                        <NavLink to='/review'>
                            <li>
                                <a className="button">Review</a>
                            </li>
                        </NavLink>
                        {/* <li>
                            <a className="button" onClick={handleLearnMore} >Learn More</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SoundSection;


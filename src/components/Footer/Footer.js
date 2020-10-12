import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-box region">
            <img 
                src="https://static.trainlinecontent.com/content/WEB/images/country-flags/fr.svg" 
                alt="Changer de langue ou de devise" />
                <span>&nbsp;&nbsp;FR / EUR</span>
            </div>
            <div className="footer-box"> 
                <span>&#64; Copyright 2020</span>
                <span>Designed by Huynh Dung NGUYEN</span>
            </div>
            <div className="footer-box region"> 
                <img 
                src="https://static.trainlinecontent.com/content/WEB/images/country-flags/fr.svg" 
                alt="Changer de langue ou de devise" />
                <span>&nbsp;&nbsp;FR / EUR</span>
            </div>
        </footer>
    )
}

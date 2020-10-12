import React from 'react';
import logo from '../../img/logo.svg';
import './Header.css';

export default function Header() {
    return (
        <header className="header">  
            <div className="header-logo">
                <a href="/"> 
                <img src={logo} className="header-logo" alt="img-logo" />
                </a>
            </div>

            <div className="toggle-header">
                <input type="checkbox" id="check" />
                <label htmlFor="check">
                    <span id="toggle"></span>
                </label>

                <div className="sidebar">
                    <div></div>
                    <ul>
                        <li><a href="/" ><span className="link-text">Business</span></a></li>
                        <li><a href="/" ><span className="link-text">Aide</span></a></li>
                        <li><a href="/" ><span className="link-text">Achat carte ou abonnement</span></a></li>
                        <li><a href="/" ><span className="link-text">Creer un compte</span></a></li>
                        <li><a href="/" ><span className="link-text">Se connecter</span></a></li>
                    </ul>
                </div>
            </div>
            
            <div className="header-box"> 
                <ul>
                    <li><a href="/" >Business</a></li>
                    <li><a href="/" >Aide</a></li>
                    <li><a href="/" >Achat carte ou abonnement</a></li>
                    <li className="non-active">|</li>
                    <li><a href="/" >Creer un compte</a></li>
                    <li className="bgr-white"><a className="col-blue" href="/">Se connecter</a></li>
                </ul>
            </div>
        </header>
    )
}

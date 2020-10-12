import React from 'react';
import './Information.css';
import info1 from '../../../img/info1.svg';
import info2 from '../../../img/info2.svg';
import info3 from '../../../img/info3.svg';

export default function Information() {
    return (
        <div className="information">
            <div className="content">
                <h2>Trainline</h2>
                <div className="content-box">
                    <img src={info1} alt="info1" />
                    <div className="text">
                        <span>Trouvez le meilleur prix pour votre trajet</span>
                        <br/>
                        Comparez et réservez vos billets pour voyager avec SNCF, OUIGO, Eurostar et plus de 200 autres transporteurs.
                    </div>
                </div>

                <div className="content-box">
                    <img src={info2} alt="info2" />

                    <div className="text">
                        <span>Obtenez vos points de fidélité et vos réductions</span>
                        <br/>
                        Nous acceptons les cartes de réduction et abonnements SNCF et bien d'autres encore.
                    </div>
                </div>

                <div className="content-box">
                    <img src={info3} alt="info3" />
                    <div className="text">
                        <span>Payez en toute sécurité</span>
                        <br/>
                        Nous acceptons PayPal, Apple Pay, Visa, Amex et toutes les cartes bancaires internationales.
                    </div>
                </div>

                <div className="content-footer">
                    <p>L'app leader en Europe pour voyager en train et en bus</p>
                    <div>
                        <a href="/"><img src="https://static.trainlinecontent.com/content/WEB/images/app-stores/fr/app_store.svg" alt="Visitez l'app store" /></a>
                        <a href="/"><img src="https://static.trainlinecontent.com/content/WEB/images/app-stores/fr/google_play.svg" alt="Visitez Google Pay" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

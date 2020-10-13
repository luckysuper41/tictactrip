import React from 'react';
import PropTypes from 'prop-types';
import './FormLeft.css';

export default function FormLeft(props) {

    const {arrive, setArrive, depart,setDepart, setSelect, setSwapform, inputDepRef, inputArrRef, inputDateArrRef} = props;

    const swap_button = () => {
        let swap;
        swap = arrive;
        setArrive(depart);
        setDepart(swap);
    }

    return (
        <div className="formleft">
            <form autoComplete="off" action=""> 
                <h2>Quel est votre trajet ?</h2>

                <div className="input-box">
                    <input
                    type="text"
                    autoComplete="off"
                    placeholder="Saisissez votre gare de départ..."
                    required
                    className="inputDeparture"
                    name="inputDeparture"
                    value={depart}
                    onChange={(event) => {
                        setDepart(event.target.value)}}
                    onFocus={() => {
                        setSwapform(true)
                        setSelect(true)}}
                    ref={inputDepRef}
                    />
                    
                    <input
                    type="text"
                    autoComplete="off"
                    placeholder="Saisissez votre gare d'arrivée..."
                    required
                    className="inputArrival"
                    name="inputArrival"
                    value={arrive}
                    onChange={(event) => {
                        setArrive(event.target.value)}}
                    onFocus={() => {
                        setSwapform(true)
                        setSelect(false)}}
                    ref={inputArrRef}
                    />

                    <button type="button" className="swap-button" onClick={()=>swap_button()}><img src="https://assets.trainline.eu/assets/images/swap-39f4eab40764c8e628e7a1c30545ef67.svg" alt="swapbutton" /></button>
                </div>

                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Saisissez votre date d'aller"
                        required
                        className="inputAller"
                        name="inputAller"
                        disabled
                        ref={inputDateArrRef}
                    />
                    <input
                        type="text"
                        placeholder="Saisissez votre date de retour"
                        required
                        className="inputRetour"
                        name="inputRetour"
                        disabled
                    />
                </div>

                
                <div className="input-box">
                    <input
                    type="button"
                    defaultValue="1 Adulte (26 - 59)"
                    required
                    className="member"
                    name="member"
                    disabled
                    />
                    <button className="Add">Ajouter des passagers</button>
                </div>
                
                <div className="input-box">
                    <a href="/"><span>Utiliser un code de réduction</span></a>
                    <input type="submit" name="submit-button" value="Recherche" disabled/>
                </div>
        
            </form>
        </div>
    )
}

// PropTypes
FormLeft.propTypes = {
    arrive: PropTypes.string, 
    setArrive: PropTypes.func, 
    depart: PropTypes.string,
    setDepart: PropTypes.func,
    setSelect: PropTypes.func, 
    setSwapform: PropTypes.func, 
    inputDepRef: PropTypes.object, 
    inputArrRef: PropTypes.object, 
    inputDateArrRef: PropTypes.object
}
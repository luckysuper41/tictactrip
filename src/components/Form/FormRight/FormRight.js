import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import './FormRight.css';
import axios from 'axios';

export default function FormRight(props) {
    const {arrive, setArrive, depart, setDepart, select, setInputDepRef, setInputArrRef, setInputDateArrRef, setSwapform} = props;

    const [villes,setVilles] = useState([]);

    const URLBaseVilles = 'https://api.comparatrip.eu/cities/autocomplete/?q=';
    const URLVillesPopular = 'https://api.comparatrip.eu/cities/popular/5';
    let URL5VillesPopular = 'https://api.comparatrip.eu/cities/popular/from/' + (select === true ? arrive : depart) + '/5';
    let URLVilles = URLBaseVilles + ( select === true ? depart : arrive);

    let URL;

    if( !depart && !arrive ){
        URL = URLVillesPopular;
    }else if( (!depart && arrive && select === true) || (depart && !arrive && select === false)){
        URL = URL5VillesPopular;
    }else{
        URL = URLVilles;
    }


    useEffect(() => {
        const getVilles = async () => {
            try{
                const res = await axios.get(URL)
                setVilles(res.data);
            } catch(error){
                console.log(error.message);  
            }
        }
        getVilles();
    }, [URL])


    const heading = () => {
        if(URL === URLVilles){
            return <h2>Cherchez-vous des villes ci-dessous?</h2>
        }
        if(URL === URLVillesPopular){
            return <h2>5 villes les plus populaires:</h2>
        }
        if(URL === URL5VillesPopular){
            return <h2>5 villes les plus populaires au départ de <span className="name-ville">{(select === true ? arrive : depart)}</span>:</h2>
        }
    }

    const Depart_villes = () =>{
        return(
                <div className="list-ville">
                    {villes.map(ville =>{
                        return  <button 
                        type="button"
                        className="button-list"
                        key={ville.city_id} 
                        onClick={() => {
                            (!arrive ? setInputArrRef() : setInputDateArrRef())
                            setDepart(ville.unique_name)
                        }}
                        ><img src="https://assets.trainline.eu/assets/images/location-5632039ea0e607c803bc503fba864f35.svg" alt="loca-icon" />{ville.unique_name}</button>
                    })}
                </div>
        );
    }

    const Arrive_villes = () =>{
        return(
                    <div className="list-ville">
                        {villes.map(ville =>{
                            return  <button 
                            type="button"
                            className="button-list"
                            key={ville.city_id} 
                            onClick={() => {
                                (!depart ? setInputDepRef() : setInputDateArrRef())
                                setArrive(ville.unique_name)
                            }}
                            ><img src="https://assets.trainline.eu/assets/images/location-5632039ea0e607c803bc503fba864f35.svg" alt="loca-icon" />{ville.unique_name}</button>
                        })}
                    </div>
        );
    }

    return (
        <div className="formright">
            <div className="formlist">
                <button 
                type="button"
                className="exit-button"
                onClick={()=>setSwapform(false)}
                >X</button>
                <div className={(select === true ? "arrow-depart" : "arrow-arrive")} />
                {heading()}
                {select === true ? Depart_villes() : Arrive_villes()}
                <div className = "form-footer">
                    <button><img src="https://assets.trainline.eu/assets/images/add-via-ff2137e0ba72cb639915b58caca6f280.svg" alt="via-icon" />VIA</button>
                </div>
            </div>
        </div>
    )
}

// PropTypes
FormRight.propTypes = {
    arrive: PropTypes.string, 
    setArrive: PropTypes.func, 
    depart: PropTypes.string,
    setDepart: PropTypes.func,
    select: PropTypes.bool, 
    setInputDepRef: PropTypes.func, 
    setInputArrRef: PropTypes.func, 
    setInputDateArrRef: PropTypes.func, 
    setSwapform: PropTypes.func
}
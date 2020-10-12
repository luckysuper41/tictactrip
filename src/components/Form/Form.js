import React,{useState} from 'react';
import './Form.css';
import FormLeft from './FormLeft/FormLeft';
import FormRight from './FormRight/FormRight';
import Information from './Information/Information';
import useFocus from '../../hoc/useFocus';


export default function Form() {
    const [depart,setDepart]=useState('');
    const [arrive,setArrive]=useState('');
    const [select,setSelect] = useState(false);
    const [swapform,setSwapform] = useState(false);

    const [inputDepRef,setInputDepRef] = useFocus();
    const [inputArrRef,setInputArrRef] = useFocus();

    //pour les autres input...
    const [inputDateArrRef,setInputDateArrRef] = useFocus();

    return (
        <div className="form">
            <FormLeft 
                depart={depart} 
                setDepart={setDepart} 
                arrive={arrive} 
                setArrive={setArrive}  
                setSelect={setSelect} 
                setSwapform={setSwapform}
                inputArrRef={inputArrRef}
                inputDepRef={inputDepRef}
                inputDateArrRef={inputDateArrRef}
                />
            { !swapform 
                ? <Information /> 
                : <FormRight 
                    depart={depart} 
                    setDepart={setDepart} 
                    arrive={arrive} 
                    setArrive={setArrive}  
                    select={select} 
                    setInputArrRef={setInputArrRef}
                    setInputDepRef={setInputDepRef}
                    setInputDateArrRef={setInputDateArrRef}
                    setSwapform={setSwapform}
                    />
            }
        </div>
    )
}

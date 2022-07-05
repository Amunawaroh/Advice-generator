import { useEffect, useState } from "react";

import lineDivider from "../images/pattern-divider-mobile.svg"
import icon from "../images/icon-dice.svg"

import axios from "axios";

const Generator = () => {
    const [advice, setAdvice] = useState({ id: '', advice: '' });

    useEffect(() => {
        requestAdvice();
    }, []);

const requestAdvice = () => {
    axios.get('https://api.adviceslip.com/advice').then(res => setAdvice(res.data.slip))
};

    return ( 
        <div className="advice" advice = { advice }>
          <div className="advice__heading">
            <h1>Advice #{advice.id}</h1>
            <p>"{advice.advice}"</p>
          </div>
         <div className="images">
            <img className="line__divider" src={lineDivider}/>
            <div className="dice">
              <button className="dice__button" onClick={requestAdvice}> <img src={icon} alt="dice"/> </button>
            </div>
         </div>
        </div>
    );
}

export default Generator;


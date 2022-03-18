import React from 'react';
import useSound from 'use-sound';
import powerOn from './sounds/gameboy.mp3';
import './TurnOn.css';
import powerButton from './images/powerbutton.png';

const TurnOn= () => {
    const [play] = useSound(powerOn, {volume:.5});
    return(
        <button className='power-button' onClick={play}>
            <img className='image' src={powerButton} alt='powerbutton' />
        </button>
    )
}

export default TurnOn;

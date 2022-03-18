import React, {useState} from 'react';
import './App.css';
import TurnOn from './TurnOn';
import victory from './sounds/victory.mp3';
import useSound from 'use-sound';
import Song from './Song.js';


function App() {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const ops = ['.', '/', '*', '+', '-', 'sin', 'cos', 'tan'];

  const updateCalc = (value) =>{
    
    if((ops.includes(value) && calc === '') || (ops.includes(value) && ops.includes(calc.slice(-1)))){
      return;
    }
    setCalc(calc + value);

    if(!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
    
  }

  const create123 = () => {
    const digits = [];
    for(let i=1; i < 4; i++){
      digits.push(
        <button 
        onClick={()=> updateCalc(i.toString())}
        key={i}>{i}</button>
      )
    }
    return digits;
   }

   const create456 = () => {
    const digits = []
    for(let i=4; i < 7; i++){
      digits.push(
        <button 
        onClick={()=> updateCalc(i.toString())}
        key={i}>{i}</button>
      )
    }
    return digits;
   }

   const create789 = () => {
    const digits = []
    for(let i=7; i < 10; i++){
      digits.push(
        <button 
        onClick={()=> updateCalc(i.toString())}
        key={i}>{i}</button>
      )
    }
    return digits;
   }

   const calculate = () => {
     setCalc(eval(calc).toString());
     setHistory([...history, result]);
     console.log(history);
   }

   const deleteLast = () => {
     if(calc === ''){
       return;
     } 

     const value = calc.slice(0, -1);
     setCalc(value);
   }
  
  const [play] = useSound(victory, {volume: 0.25})

  

  return (
    <div className='background'>
      <div className="App">
        <div className='switch-container'> 
          <div className='switch-left'>
            <div className='minus-sign'></div>
            <div className='analog-stick-left'></div>
            <div className='direction-controls'>
              <div className='top-direction'>
                <div className='arrow-up'></div>
              </div>
              <div className='middle-buttons'>
                <div className='left-direction'>
                  <div className='arrow-left'></div>
                </div>
                <div className='right-direction'>
                  <div className='arrow-right'></div>
                </div>
              </div>
              <div className='bottom-direction'>
                <div className='arrow-down'></div>
              </div>
            </div>
            <div className='small-button'>
              <div className='small-button-circle'></div>
            </div>
          </div>
          <div className='calculator'>
            <div className='display'>
              {result ? <span>{result}</span> : ''} 
              {calc || '0'}
            </div>
            <div className='calculator-body'>
            <div className='operators'>
                <button onClick={deleteLast}>CE</button>
                <button onClick={()=> updateCalc('/')}>÷</button>
                <button onClick={()=> updateCalc('*')}>*</button>
                <button onClick={()=> updateCalc('-')}>-</button>
                <button onClick={()=> updateCalc('+')}>+</button>
            </div>
            <div className='digits'>
              <button onClick={play}>VICTORY!</button>
              <Song />
              {create789()}
              {create456()}
              {create123()}
              <button onClick={()=> updateCalc('0')}>0</button>
              <button onClick={()=> updateCalc('.')}>.</button>
              <button onClick={calculate}>=</button>
            </div> 
            </div> 
          </div>
          <div className='switch-right'>
            <div className='plus-sign'>
              <div className='plus-sign-horizontal'></div>
              <div className='plus-sign-vertical'></div>
            </div>
            <div className='letter-controls'>
              <div className='x-button'>
              <div className='letters'>X</div>
              </div>
              <div className='center-buttons'>
                <div className='y-button'>
                <div className='letters'>Y</div>
                </div>
                <div className='a-button'>
                <div className='letters'>A</div>
                </div>
              </div>
              <div className='b-button'>
                <div className='letters'>B</div>
              </div>
            </div>
            <div className='analog-stick-right'></div>
            <TurnOn />
          </div>
        </div>  
      </div>
    </div>
  );
}

export default App;

  
      
      
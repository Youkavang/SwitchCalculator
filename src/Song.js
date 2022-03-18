import useSound from 'use-sound';
import './Song.css';
import timeMachine from './sounds/timeMachine.mp3';

const Song = () => {
  const [play, {pause}] = useSound(timeMachine, {volume: .5});

  return (
  <div className='buttons'>
    <button onClick={()=>play()}>Play!
    </button>
    <button onClick={()=>pause()}>Pause!
    </button>
  </div>)
};

export default Song; 
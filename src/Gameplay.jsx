import React, { useContext, useState, useEffect } from 'react';
import { TransferValue } from './TransferContext';
import './Gameplay.css';
import cheems from './images/Cc.gif';
import { useNavigate } from 'react-router-dom';
import rock from './images/stone.jpeg'
import paper from './images/paper.jpeg'
import scissors from './images/scissor.jpeg'
import leftini from './images/left-initial.gif'
import rightini from './images/right-initial.gif'
import leftrock from './images/left-stone1.gif'
import leftpaper from './images/left-paper1.gif'
import leftscissors from './images/left-scisor1.gif'
import rightrock from './images/right-stone.gif'
import rightpaper from './images/right-paper.gif'
import rightscissors from './images/right-scissor.gif'

const Gameplay = () => {
  const { val } = useContext(TransferValue);
  const [final, setFinal] = useState(val);
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [message, setMessage] = useState('');
  const [playerValue, setPlayerValue] = useState('');
  const [devalue, setDevalue] = useState('');
  const [display, setDisplay] = useState('Remaining chances');
  const navigate = useNavigate();
  const compArray = ['rock', 'paper', 'scissors'];

  const images = {
    // rock: 'https://media.tenor.com/5XuwpvROzEoAAAAi/rock-paper-scissors-roshambo.gif',
    // paper: 'https://media.tenor.com/iXeUwKbISiQAAAAi/rock-paper-scissors-roshambo.gif',
    // scissors: 'https://media.tenor.com/NyHqrePBRAEAAAAi/rock-paper-scissors-roshambo.gif',
    rock:rock,
    paper:paper,
    scissors:scissors,
  };

  const gif = {
    initial: {
      leftini: leftini,
      rightini: rightini
    },
    paper: {
      leftpaper: leftpaper,
      rightpaper: rightpaper
    },
    scissors: {
      leftscissors: leftscissors,
      rightscissors: rightscissors
    },

    rock: {
      leftrock: leftrock,
      rightrock: rightrock
    },
  };
  

  const handleClick = (userValue) => {
    if (final > 0) {
      const compValue = compArray[Math.floor(Math.random() * 3)];
      setPlayerValue(userValue);
      setDevalue(compValue);

      if (userValue === 'rock' && compValue === 'scissors') {
        setUserScore((prevScore) => prevScore + 1);
      } else if (userValue === 'scissors' && compValue === 'rock') {
        setCompScore((prevScore) => prevScore + 1);
      } else if (userValue === 'scissors' && compValue === 'paper') {
        setUserScore((prevScore) => prevScore + 1);
      } else if (userValue === 'paper' && compValue === 'scissors') {
        setCompScore((prevScore) => prevScore + 1);
      } else if (userValue === 'paper' && compValue === 'rock') {
        setUserScore((prevScore) => prevScore + 1);
      } else if (userValue === 'rock' && compValue === 'paper') {
        setCompScore((prevScore) => prevScore + 1);
      }

      setFinal((prevFinal) => prevFinal - 1);
    }
  };

  useEffect(() => {
    if (final === 0) {
      if (userScore > compScore) {
        setMessage('🥳🥳🥳 Congrats you won the game 🥳🥳🥳');
      } else if (userScore < compScore) {
        setMessage('😉😉😉 Better luck next time 😉😉😉');
      } else {
        setMessage('🙂🙂🙂 It\'s a tie 🙂🙂🙂');
      }
      setDisplay('Game Over');
    }
  }, [final, userScore, compScore]);

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className='fulldiv'>
      <div className='flex'>
        <h1 className='head'>Let's have fun........</h1>
        <img src={cheems} alt="cheems" height={100} width={100} />
      </div>
      {
        final > 0 ? <h2 className='final align'>{display} : {final}</h2> : <h2 className='final align'>{display}</h2>
      } 
      <br />
      <h1 className='opt-head'>Select any one of the given options</h1>
      <div className='option'>
        <img
          src={images['rock']}
          width={70}
          height={70}
          alt='Rock'
          onClick={() => final > 0 && handleClick('rock')}
          style={{ cursor: final > 0 ? 'pointer' : null ,marginRight:'2em'}}
        />
        <img
          src={images['paper']}
          width={70}
          height={70}
          alt='Paper'
          onClick={() => final > 0 && handleClick('paper')}
          style={{ cursor: final > 0 ? 'pointer' : null,marginRight:'2em' }}
        />
        <img
          src={images['scissors']}
          width={70}
          height={70}
          alt='Scissors'
          onClick={() => final > 0 && handleClick('scissors')}
          style={{ cursor: final > 0 ? 'pointer' : null,marginRight:'2em' }}
        />
      </div>
      <div className='choices'>
      
        <div className='choice'>
          <h2 className='final-same align' style={{ color: 'green',marginBottom: '1em'}}>{playerValue ? `Your choice : ${playerValue}` : null}</h2>
          <img src={playerValue ? playerValue==='rock' ? gif.rock.leftrock : playerValue==='paper' ? gif.paper.leftpaper : gif.scissors.leftscissors : gif.initial.leftini} alt={playerValue} width={100} height={100} />
        </div>
      
      
        <div className='choice'>
          <h2 className='final-same align' style={{ color: 'blue',marginBottom: '1em'}}>{devalue ? `Developer choice : ${devalue}` : null}</h2>
          <img src={devalue ? devalue==='rock' ? gif.rock.rightrock : devalue==='paper' ? gif.paper.rightpaper : gif.scissors.rightscissors : gif.initial.rightini} alt={devalue} width={100} height={100} />
        </div>
      
      </div>
      <div className='btn-flex'>
        {final === 0 && (
          <div className='result'>
            <h2 className='final-same' style={{ textAlign: 'center', marginBottom: '1em', marginTop: '1em' }}>Your Score: {userScore}</h2>
            <h2 className='final-same' style={{ textAlign: 'center' }}>Developer Score: {compScore}</h2>
            <h2 className='final2'>{message}</h2>
            <button className='btn1' onClick={goHome}>Play Again Dude</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gameplay;

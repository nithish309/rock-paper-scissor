import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TransferValue } from './TransferContext'; 
import rock from './images/rock-paper.gif';
import './ChancePage.css';
import cheemsvibe from './images/cheems-vibe.gif';

const ChancePage = () => {
  const [inputValue, setInputValue] = useState('');
  const { setVal } = useContext(TransferValue); 
  const navigate = useNavigate();

  const handleValueChange = (e) => {
    if(e.target.value < 0) {
      alert('Please enter positive number');
    }
    else if(e.target.value ==0) {
        alert('Please enter number greater than 0');
    }
    else
        setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setVal(inputValue); 
    navigate('/gameplay'); 
  };

  return (
    <div className='div'>
      <div className='fx'>
        <h1 className='h1'>
          <span>Welcome to </span> NK<span>'s </span>RoCk <span>&</span> PaPeR <span>&</span> sCiSsOrS
        </h1>
        <img src={cheemsvibe} width={50} style={{marginLeft:"1em",marginBottom:"0.1em",borderRadius:'45%'}}/>
      </div>
      <img  className='img' src={rock} alt="Rock Paper Scissors" />
      <form onSubmit={handleSubmit}>
        <h2 className='h2'>
          Enter number of chances you want to play:
          <input
            type='number'
            value={inputValue}
            onChange={handleValueChange}
            required
          />
        </h2>
        <button className='btn' type='submit'>Let's go baby</button>
      </form>
    </div>
  );
};

export default ChancePage;

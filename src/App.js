import './App.css';
import logo from './images/logo.png';
import Button from './components/Button/Button';
import Counter from './components/Counter/Counter';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 1)
  };

  const resetCount = () => {
    setNumClicks(0);
  };

  return (
    <div className='App'>
      <div className='logo-container'>
        <img 
          className='logo' 
          src={logo} 
          alt='Logo' 
        />
      </div>
      <div className='main-container'>
        <Counter numClicks={numClicks} />
        <Button 
          text='Click'
          isClickButton={true}
          handleClick={handleClick}
        />
        <Button 
          text='Reset'
          isClickButton={false}
          handleClick={resetCount}
        />
      </div>
    </div>
  );
}

export default App;
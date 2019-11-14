import React, { FC } from 'react';
import '../styles/App.css';
import { GameContainer } from './Game';

const App: FC = () => {
  return (
    <div className="App">
      <GameContainer />
    </div>
  );
}

export default App;

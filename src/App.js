import React, { useState } from 'react';

import './App.css';
import Game from './components/Game';
import PlayerList from './components/Playerlist';

function App() {
  const [playerBPoints, setPlayerBPoints] = useState(0);
  const [playerAPoints, setPlayerAPoints] = useState(0);
  const [playerATurn, setPlayerATurn] = useState(true);

  return (
    <div className="App">
      <PlayerList playerBPoints={playerBPoints} playerAPoints={playerAPoints}/>
      <Game 
        playerBPoints={playerBPoints}
        playerAPoints={playerAPoints}
        setPlayerBPoints={setPlayerBPoints} 
        setPlayerAPoints={setPlayerAPoints} 
        setPlayerATurn={setPlayerATurn} 
        playerATurn={playerATurn}
      />
    </div>
  );
}

export default App;

import './App.css';
import Game from './components/Game';
import PlayerList from './components/Playerlist';

function App() {
  return (
    <div className="App">
      <PlayerList />
      <Game />
    </div>
  );
}

export default App;

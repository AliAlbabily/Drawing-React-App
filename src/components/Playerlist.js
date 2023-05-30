import '../components/PlayerList.css';
import Player from './Player';

function PlayerList() {
    return (
        <div className="Playerlist">
            <h1>Players</h1>
            <Player name="A" />
            <Player name="B" />
        </div>
    );
}

export default PlayerList;

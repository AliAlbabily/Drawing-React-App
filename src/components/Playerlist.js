import '../components/PlayerList.css';
import Player from './Player';

function PlayerList() {
    return (
        <div className="Playerlist">
            <h1>Players</h1>
            <Player name="Duy" />
            <Player name="Jagtej" />
            <Player name="Ali" />
        </div>
    );
}

export default PlayerList;

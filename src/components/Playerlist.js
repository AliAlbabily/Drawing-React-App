import '../components/PlayerList.css';
import Player from './Player';

function PlayerList(props) {
    return (
        <div className="Playerlist">
            <h1>Players</h1>
            <Player name="A" points={props.playerAPoints}/>
            <Player name="B" points={props.playerBPoints}/>
        </div>
    );
}

export default PlayerList;

import { useEffect } from 'react';

import '../components/PlayerList.css';
import Player from './Player';

function PlayerList(props) {
    useEffect(() => {
        if (props.playerAPoints === 3) {
            alert("Player A wins!")
            window.location.reload();
        } else if (props.playerBPoints === 3) {
            alert("Player B wins!")
            window.location.reload();
        }
    })

    return (
        <div className="Playerlist">
            <h1>Players</h1>
            <Player name="A" points={props.playerAPoints}/>
            <Player name="B" points={props.playerBPoints}/>
        </div>
    );
}

export default PlayerList;

import React, { useState } from 'react';

import '../components/Game.css';

import SketchView from '../components/sketch/SketchView';
import WordSelector from './words/WordSelector';

function Game(props) {
    const [wordIsSelected, setWordIsSelected] = useState(false);
    const [word, setWord] = useState("");

    if (wordIsSelected) {
        return (
            <div className="Game">
                <SketchView 
                    word={word} 
                    playerBPoints={props.playerBPoints}
                    playerAPoints={props.playerAPoints}
                    setPlayerAPoints={props.setPlayerAPoints} 
                    setPlayerBPoints={props.setPlayerBPoints} 
                    playerATurn={props.playerATurn}
                    setPlayerATurn={props.setPlayerATurn}
                    setWordIsSelected={setWordIsSelected}
                />
            </div>
        );
    } else {
        return (
            <div className="Game">
                <WordSelector setWordIsSelected={setWordIsSelected} setWord={setWord} />
            </div>
        );
    }
}

export default Game;

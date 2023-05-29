import React, { useState } from 'react';

import '../components/Game.css';

import SketchView from '../components/sketch/SketchView';
import WordSelector from './words/WordSelector';

function Game() {
    const [wordIsSelected, setWordIsSelected] = useState(false);
    const [word, setWord] = useState("");

    if (wordIsSelected) {
        return (
            <div className="Game">
                <SketchView word={word}/>
            </div>
        );
    } else {
        return (
            <div className="Game">
                <WordSelector setWordIsSelected={setWordIsSelected} setWord={setWord}/>
            </div>
        );
    }
}

export default Game;

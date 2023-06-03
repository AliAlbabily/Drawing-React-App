import React, { useEffect, useState } from 'react';

import './WordSelector.css';

import WordContainer from './WordContainer';
import ShuffleBtn from './ShuffleBtn';

function WordSelector(props) {
    const [words, setWords] = useState([]);

    //https://random-word-form.herokuapp.com/random/noun?count=4
    //https://github.com/dulldesk/words-api/
    useEffect(() => {
        fetch("https://random-word-form.herokuapp.com/random/noun?count=4")
        .then(res => res.json())
        .then(
            (result) => {
                setWords(result)
            }
        )
    }, [])

    const shuffleWords = () => {
        fetch("https://random-word-form.herokuapp.com/random/noun?count=4")
        .then(res => res.json())
        .then(
            (result) => {
                setWords(result)
            }
        )
    }

    const selectWord = (word) => {
        props.setWord(word)
        props.setWordIsSelected(true)
    }

    return (
        <div className="WordSelector">
            <WordContainer words={words} selectWord={selectWord}/>
            <ShuffleBtn shuffleWords={shuffleWords}/>
        </div>
    )
}

export default WordSelector;
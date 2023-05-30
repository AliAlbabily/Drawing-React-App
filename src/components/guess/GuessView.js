import React, { useRef } from 'react';

import './GuessView.css';

function GuessView(props) {
    const inputGuessRef = useRef(null);

    const guessWord = () => {
        if (inputGuessRef.current.value === props.wordToGuess) {
            alert("You guessed it right. Awesome work!")
            if (!props.playerATurn) {
                props.setPlayerAPoints(playerAPoints => {
                    return playerAPoints + 1;
                })
            } else {
                props.setPlayerBPoints(playerBPoints => {
                    return playerBPoints + 1;
                })
            }
            shiftTurn()
        } else {
            alert("You guessed it wrong. Try again!")
            if (!props.playerATurn) {
                props.setPlayerAPoints(playerAPoints => {
                    return playerAPoints - 1;
                })
            } else {
                props.setPlayerBPoints(playerBPoints => {
                    return playerBPoints - 1;
                })
            }
        }
        //shiftTurn()
        
        
    }

    const shiftTurn = () => {
        props.setWordIsSelected(false)
        props.setIsDrawing(false)
        props.setPlayerATurn(!props.playerATurn)
    }

    //The word to guess: {props.wordToGuess}
    return ( 
        <div className='GuessView'>
            <div className='ImageDiv'>
                <img src={props.imageSrc} alt='drawing to guess'/>
            </div>
            <div className='InputDiv'>
                <form>
                    <h2>Your guess</h2>
                    <input type='text' ref={inputGuessRef} />
                </form>

                <button onClick={() => guessWord()}>Guess</button>
            </div>
        </div>
    );
}

export default GuessView;
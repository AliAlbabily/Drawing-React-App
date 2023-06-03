import React, { useState, useRef } from 'react';

import './GuessView.css';

function GuessView(props) {
    const inputGuessRef = useRef(null);
    const [livesCount, setLivesCount] = useState(3);

    const guessWord = () => {
        if (inputGuessRef.current.value === props.wordToGuess) {
            if (!props.playerATurn) {
                props.setPlayerAPoints(playerAPoints => {
                    return playerAPoints + 1;
                })
            } else {
                props.setPlayerBPoints(playerBPoints => {
                    return playerBPoints + 1;
                })
            }
            alert("You guessed it right. Awesome work!")
            shiftTurn()
        } else {
            alert("You guessed it wrong. Try again! Lives left: " + livesCount)
            setLivesCount(
                count => {
                    return count - 1;
                }
            )
            console.log(livesCount);
            if (livesCount === 0) {
            if (!props.playerATurn) {
                props.setPlayerAPoints((playerAPoints) => {
                return playerAPoints - 1;
                });
            } else {
                props.setPlayerBPoints((playerBPoints) => {
                return playerBPoints - 1;
                });
            }
            shiftTurn()
            }
            
        }
    }
    
    const shiftTurn = () => {
        props.setWordIsSelected(false)
        props.setIsDrawing(false)
        props.setPlayerATurn(!props.playerATurn)
    }

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
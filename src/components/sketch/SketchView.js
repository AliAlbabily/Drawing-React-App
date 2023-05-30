import React, { useState, useEffect, useRef } from 'react';

import './SketchView.css';

import SketchCanvas from './SketchCanvas';
import GuessView from '../guess/GuessView';
import SubmitBtn from './SubmitBtn';

function SketchView(props) {
    const [startCounting, setStartCounting] = useState(true)
    const [count, setCount] = useState(60);
    const [isDrawing, setIsDrawing] = useState(true);
    const [imageSrc, setImageSrc] = useState("");

    const canvasRef = useRef(null);

    useEffect(() => {
        let timer = null

        if (!startCounting) {
            return () => {};
        }

        timer = setInterval(() => {
            setCount(prevCount => {
                if (prevCount <= 0) {
                    clearInterval(timer)
                    submitDrawing()
                    return prevCount; 
                } else {
                    return prevCount - 1;
                }
            });
        }, 1000);

        return () => {
            clearInterval(timer); 
        };
    }, [startCounting]); // empty dependency array to run the effect only once

    const submitDrawing = () => {
        setStartCounting(false)
        canvasRef.current
            .exportImage("png")
            .then(drawingSrc => {
                setImageSrc(drawingSrc)
                setIsDrawing(false)
            })
            .catch(e => {
                console.log(e);
            });
    }

    return (
        <div className="SketchView">
            <div className='TopicAndTime'>
                <h2>{props.word}</h2>
                <h2>{count}</h2>
                
            </div>
            { isDrawing 
                ? <>
                    <SketchCanvas setImageSrc={setImageSrc} submitDrawing={submitDrawing} canvasRef={canvasRef} />
                    <SubmitBtn submitDrawing={submitDrawing} />
                </>
                : <><GuessView 
                    imageSrc={imageSrc} 
                    wordToGuess={props.word}
                    setPlayerAPoints={props.setPlayerAPoints} 
                    setPlayerBPoints={props.setPlayerBPoints} 
                    playerATurn={props.playerATurn}
                    setPlayerATurn={props.setPlayerATurn}
                    setWordIsSelected={props.setWordIsSelected}
                    setIsDrawing={setIsDrawing}
                /> </>
            }
        </div>
    )
}

export default SketchView;
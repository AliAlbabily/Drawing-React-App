import React, { useState, useEffect } from 'react';

import './SketchView.css';

import SketchCanvas from './SketchCanvas';
import GuessView from '../guess/GuessView';
import GuessBtn from '../guess/GuessBtn';

function SketchView(props) {
    const [count, setCount] = useState(60);
    const [isDrawing, setIsDrawing] = useState(true);
    const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {
        let timer = setInterval(() => {
            setCount(prevCount => {
                if (prevCount <= 0) {
                    clearInterval(timer);
                    setIsDrawing(false)
                    return prevCount; 
                } else {
                    return prevCount - 1;
                }
            });
        }, 1000);

        return () => {
            clearInterval(timer); 
        };
    }, []); // empty dependency array to run the effect only once


    const submitDrawing = (canvasObject) => {
        canvasObject
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
                ? <SketchCanvas setImageSrc={setImageSrc} submitDrawing={submitDrawing}/>
                : <><GuessView imageSrc={imageSrc} /> <GuessBtn /> </>
            }
        </div>
    )
}

export default SketchView;
import React, { useState, useEffect } from 'react';

import './SketchView.css';

import SketchCanvas from './SketchCanvas';
import SubmitBtn from './SubmitBtn';
import GuessView from '../guess/GuessView';
import GuessBtn from '../guess/GuessBtn';

function SketchView(props) {
    const [count, setCount] = useState(60);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        let timer = setInterval(() => {
            setCount(prevCount => {
                if (prevCount <= 0) {
                    clearInterval(timer);
                    console.log("Time's up!");
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

    return (
        <div className="SketchView">
            <div className='TopicAndTime'>
                <h2>{props.word}</h2>
                <h2>{count}</h2>
                
            </div>
            { isDrawing 
                ? <><SketchCanvas /><SubmitBtn /> </>
                : <><GuessView /> <GuessBtn /> </>
            }
        </div>
    )
}

export default SketchView;
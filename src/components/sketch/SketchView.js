import React, { useState, useEffect } from 'react';

import './SketchView.css';

import SketchCanvas from './SketchCanvas';
import SubmitBtn from './SubmitBtn';

function SketchView(props) {
    const [count, setCount] = useState(60);

    useEffect(() => {
        let timer = setInterval(() => {
            setCount(prevCount => {
                if (prevCount <= 0) {
                    clearInterval(timer);
                    console.log("Time's up!");
                    return prevCount; // optional: return the same value
                } else {
                    return prevCount - 1;
                }
            });
        }, 1000);

        return () => {
            clearInterval(timer); // clear the interval on component unmount
        };
    }, []); // empty dependency array to run the effect only once

    return (
        <div className="SketchView">
            <h1>Sketch View</h1>
            <div className='TopicAndTime'>
                {/* <Topic word={props.word}/>
                <Timer /> */}
                <h2>{props.word}</h2>
                <h2>{count}</h2>
            </div>
            <SketchCanvas />
            <SubmitBtn />
        </div>
    )
}

export default SketchView;
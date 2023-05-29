import React, { useState } from 'react';

import './SketchView.css';

import SketchCanvas from './SketchCanvas';
import SubmitBtn from './SubmitBtn';

function SketchView(props) {
    const [count, setCount] = useState(60);
    let timer = setInterval(() => {
        if (count <= 0) {
            clearInterval(timer)
            console.log("Time's up!");
        } else {
            setCount(count - 1)
        }
    }, 1000);

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
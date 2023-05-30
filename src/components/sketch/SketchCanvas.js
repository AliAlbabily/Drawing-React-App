import React, { useState, useRef } from 'react';

import './SketchCanvas.css';

import Toolbar from './toolbar/Toolbar';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import SubmitBtn from './SubmitBtn';

function SketchCanvas(props) {
    const canvasRef = useRef(null);
    const [color, setColor] = useState("black");

    const clearDrawing = () => {
        console.log("Canvas cleared")
        canvasRef.current.clearCanvas()
    }
    
    const switchColor = (selectedColor) => {
        console.log("Color switched to: " + selectedColor)
        setColor(selectedColor)
    }

    const submitDrawing = () => {
        // canvasRef.current
        //     .exportImage("png")
        //     .then(drawingSrc => {
        //         console.log(drawingSrc)
        //         props.setImageSrc(drawingSrc)
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     });
        props.submitDrawing(canvasRef.current)
    }

    return (
        <div className="SketchCanvas"> 
            <ReactSketchCanvas
                id="Canvas"
                strokeWidth={4}
                height="80%"
                strokeColor={color}
                canvasColor="white"
                ref={canvasRef}
            />
            <Toolbar clearDrawing={clearDrawing} switchColor={switchColor} />
            <SubmitBtn submitDrawing={submitDrawing} />
        </div>
    )
}

export default SketchCanvas;
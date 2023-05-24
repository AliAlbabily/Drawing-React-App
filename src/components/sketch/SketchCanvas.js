import React, { useState } from 'react';

import './SketchCanvas.css';

import Toolbar from './toolbar/Toolbar';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { useRef } from 'react';

function SketchCanvas() {
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

    // TODO: for later use
    // discuss whether the data should be saved in localstorage or as a state
    const saveDrawing = () => {
        canvasRef.current
            .exportImage("png")
            .then(drawingSrc => {
                console.log(drawingSrc)
            })
            .catch(e => {
                console.log(e);
            });
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
        </div>
    )
}

export default SketchCanvas;
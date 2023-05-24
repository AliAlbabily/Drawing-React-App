import './SketchCanvas.css';

import Toolbar from './toolbar/Toolbar';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { useRef } from 'react';

function SketchCanvas() {
    const canvasRef = useRef(null);

    const clearDrawing = () => {
        console.log("Canvas cleared");
        canvasRef.current.clearCanvas()
    }

    return (
        <div className="SketchCanvas"> 
            <ReactSketchCanvas
                id="Canvas"
                strokeWidth={4}
                height="80%"
                strokeColor="black"
                canvasColor="ghostwhite"
                ref={canvasRef}
            />
            <Toolbar clearDrawing={clearDrawing} />
        </div>
    )
}

export default SketchCanvas;
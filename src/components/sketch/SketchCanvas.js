import './SketchCanvas.css';

import Toolbar from './toolbar/Toolbar';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { useRef } from 'react';

function SketchCanvas() {
    const canvasRef = useRef(null);

    return (
        <div className="SketchCanvas"> 
            <ReactSketchCanvas
                id="Canvas"
                strokeWidth={4}
                height="80%"
                strokeColor="black"
                canvasColor="Yellow"
                ref={canvasRef}
            />
            <Toolbar />
        </div>
    )
}

export default SketchCanvas;
import './Canvas.css';
import ClearScreenBtn from './toolbar/ClearScreenBtn';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { useRef } from 'react';

function Canvas() {
    const canvasRef = useRef(null);
    
    return (
        // TODO: diskutera om denna ska bort eller inte
        // just nu används inte denna komponent någonstans i appen
        <div className="Canvas">
            {/* <ReactSketchCanvas
                strokeWidth={4}
                strokeColor="black"
                canvasColor="Yellow"
                ref={canvasRef}
            /> */}
        </div>
    )
}

export default Canvas;
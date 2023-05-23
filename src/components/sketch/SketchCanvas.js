import './SketchCanvas.css';

import Canvas from './Canvas';
import Toolbar from './toolbar/Toolbar';

function SketchCanvas() {
    return (
        <div className="SketchCanvas">
            <Canvas />
            <Toolbar />
        </div>
    )
}

export default SketchCanvas;
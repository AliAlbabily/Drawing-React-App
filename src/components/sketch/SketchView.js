import './SketchView.css';

import SketchCanvas from './SketchCanvas';
import SubmitBtn from './SubmitBtn';
import Topic from './Topic';
import Timer from './Timer';

function SketchView() {
    return (
        <div className="SketchView">
            <h1>Sketch View</h1>
            <Topic />
            <Timer />
            <SketchCanvas />
            <SubmitBtn />
        </div>
    )
}

export default SketchView;
import Eraser from './Eraser';
import ColorSelector from './ColorSelector';
import PenSizeSelector from './PenSizeSelector';
import ClearScreenBtn from './ClearScreenBtn';

import './Toolbar.css';

function Toolbar() {
    return (
        <div className="Toolbar">
            <h1>Toolbar</h1>
            <Eraser />
            <ColorSelector />
            <PenSizeSelector />
            <ClearScreenBtn />
        </div>
    )
}

export default Toolbar;
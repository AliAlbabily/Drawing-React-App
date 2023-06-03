import Eraser from './Eraser';
import ColorSelector from './ColorSelector';
import PenSizeSelector from './PenSizeSelector';
import ClearScreenBtn from './ClearScreenBtn';

import './Toolbar.css';

function Toolbar(props) {
  return (
    <div className="Toolbar">
      <ClearScreenBtn clearDrawing={props.clearDrawing} />
      <ColorSelector switchColor={props.switchColor} />
    </div>
  )
}

export default Toolbar;
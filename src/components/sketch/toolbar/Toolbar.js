import Eraser from './Eraser';
import ColorSelector from './ColorSelector';
import PenSizeSelector from './PenSizeSelector';
import ClearScreenBtn from './ClearScreenBtn';

import './Toolbar.css';

function Toolbar(props) {
  return (
    <div className="Toolbar">
      {/* <Eraser />
      <PenSizeSelector /> */}
      <ClearScreenBtn clearDrawing={props.clearDrawing} />
      <ColorSelector />
    </div>
  )
}

export default Toolbar;
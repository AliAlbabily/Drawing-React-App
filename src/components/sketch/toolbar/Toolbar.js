import Eraser from './Eraser';
import ColorSelector from './ColorSelector';
import PenSizeSelector from './PenSizeSelector';
import ClearScreenBtn from './ClearScreenBtn';

import './Toolbar.css';

function Toolbar() {
  return (
    <div className="Toolbar">
      {/* <Eraser />
      <PenSizeSelector /> */}
      <ClearScreenBtn />
      <ColorSelector />
    </div>
  )
}

export default Toolbar;
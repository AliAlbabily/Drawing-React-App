import './ColorSelector.css'

function ColorSelector(props) {
    return (
        <div className="ColorSelector">
            <div className="toolbar-row">
                <div className="color" onClick={() => props.switchColor("#FF0000")} style={{ backgroundColor: '#FF0000' }}></div>
                <div className="color" onClick={() => props.switchColor("#00FF00")} style={{ backgroundColor: '#00FF00' }}></div>
                <div className="color" onClick={() => props.switchColor("#0000FF")} style={{ backgroundColor: '#0000FF' }}></div>
                <div className="color" onClick={() => props.switchColor("#FFFF00")} style={{ backgroundColor: '#FFFF00' }}></div>
                <div className="color" onClick={() => props.switchColor("#FF00FF")} style={{ backgroundColor: '#FF00FF' }}></div>
            </div>
            <div className="toolbar-row">
                <div className="color" onClick={() => props.switchColor("#00FFFF")} style={{ backgroundColor: '#00FFFF' }}></div>
                <div className="color" onClick={() => props.switchColor("#000000")} style={{ backgroundColor: '#000000' }}></div>
                <div className="color" onClick={() => props.switchColor("#E3E3E3")} style={{ backgroundColor: '#E3E3E3' }}></div>
                <div className="color" onClick={() => props.switchColor("#800080")} style={{ backgroundColor: '#800080' }}></div>
                <div className="color" onClick={() => props.switchColor("#FFA500")} style={{ backgroundColor: '#FFA500' }}></div>
            </div>
        </div>
    )
}

export default ColorSelector;
import './ColorSelector.css'

function ColorSelector() {
    return (
        <div className="ColorSelector">
            <div className="toolbar-row">
                <div className="color" style={{ backgroundColor: '#FF0000' }}></div>
                <div className="color" style={{ backgroundColor: '#00FF00' }}></div>
                <div className="color" style={{ backgroundColor: '#0000FF' }}></div>
                <div className="color" style={{ backgroundColor: '#FFFF00' }}></div>
                <div className="color" style={{ backgroundColor: '#FF00FF' }}></div>
            </div>
            <div className="toolbar-row">
                <div className="color" style={{ backgroundColor: '#00FFFF' }}></div>
                <div className="color" style={{ backgroundColor: '#000000' }}></div>
                <div className="color" style={{ backgroundColor: '#E3E3E3' }}></div>
                <div className="color" style={{ backgroundColor: '#800080' }}></div>
                <div className="color" style={{ backgroundColor: '#FFA500' }}></div>
            </div>
        </div>
    )
}

export default ColorSelector;
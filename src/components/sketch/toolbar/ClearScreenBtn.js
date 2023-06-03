import './ClearScreenBtn.css';

function ClearScreenBtn(props) {
    return (
        <div className="ClearScreenBtn">
            <button onClick={() => props.clearDrawing()}>Clear screen</button>
        </div>
    )
}

export default ClearScreenBtn;
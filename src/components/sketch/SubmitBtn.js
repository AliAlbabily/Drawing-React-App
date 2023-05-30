import './SubmitBtn.css';

function SubmitBtn(props) {

    return (
        <div className="SubmitBtn">
            <button onClick={() => props.submitDrawing()}>Submit</button>
        </div>
    )
}

export default SubmitBtn;
import './SubmitBtn.css';

function SubmitBtn(props) {
    
    const submitDrawing = () => {
        props.submitDrawing()
    }

    return (
        <div className="SubmitBtn">
            <button onClick={() => submitDrawing()}>Submit</button>
        </div>
    )
}

export default SubmitBtn;
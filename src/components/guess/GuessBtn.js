import './GuessBtn.css';

function GuessBtn() {
    return (
        <div className="GuessBtn">
            <button onClick={() => console.log("I'm mad")}>Guess</button>
        </div>
    )
}

export default GuessBtn;
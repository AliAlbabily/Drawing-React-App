function ShuffleBtn(props) {
    return (
        <div className="ShuffleBtn">
            <button onClick={props.shuffleWords}>Shuffle words</button>
        </div>
    )
}

export default ShuffleBtn;
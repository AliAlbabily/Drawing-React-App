import './WordContainer.css';

function WordContainer(props) {
    return (
        <div className="WordContainer">
            {
                props.words.map(word => (
                    <div className='Word' key={word} onClick={() => props.selectWord(word)}>
                        <p>{word}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default WordContainer;
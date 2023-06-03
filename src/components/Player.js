import '../components/Player.css';

function Player(props) {
    return (
        <div className="Player">
            <h2>{props.name} - {props.points} Points</h2>
            
        </div>
    );
}

export default Player;

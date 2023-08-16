import '../styles/track.css';

const Track = (props) => {
    const handleButtonClick = (e) => {  props.isPlaylist ? props.onRemove(props.trackdata) : props.onAdd(props.trackdata); };

    return (
        <div className="track">
            <div className="track_info">
                {props.trackdata.name}<br></br>
                <small>{props.trackdata.artist}</small>
            </div>
            <div>
                <button className={props.isPlaylist  ? "remove" : "add"} type="button" onClick={handleButtonClick} >  {props.isPlaylist  ? "-" : "+"} </button>
            </div>
        </div>
    )
}

export default Track;
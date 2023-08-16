import Track from "./Track";
import '../styles/tracklist.css';

const Tracklist = (props) => {
    return (
        <div className="tracklist">
            {props.tracklist.map((track) => {
               return(
                    <Track trackdata={track} isPlaylist={props.isPlaylist} key={track.id} onAdd={props.onAdd} onRemove={props.onRemove} />
               ) 
            })}
        </div>
    )
}

export default Tracklist;
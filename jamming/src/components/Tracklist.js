import Track from "./Track";

const Tracklist = (props) => {
    return (
        <div>
            {props.tracklist.map((track) => {
               return(
                    <Track trackdata={track} isPlaylist={props.isPlaylist} key={track.id} onAdd={props.onAdd} onRemove={props.onRemove} />
               ) 
            })}
        </div>
    )
}

export default Tracklist;
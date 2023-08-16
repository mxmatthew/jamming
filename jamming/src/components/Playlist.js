import Tracklist from "./Tracklist";
import '../styles/playlist.css';


const Playlist = (props) => {
    const handleInputChange = (e) => {
        props.onNameChange(e.target.value)
    }

    const handleButtonClick = (e) => {
        props.onSavePlaylist()
    }

    return (
        <div className="playlist">
            <input type="text" value={props.playlistname} onChange={handleInputChange} placeholder="New Playlist Name..." />
            <Tracklist tracklist={props.tracklist} onRemove={props.onRemove} isPlaylist={true} />
            <button className="savePlaylist" type="button" onClick={handleButtonClick}>Save Playlist</button>
        </div>
    )
}

export default Playlist
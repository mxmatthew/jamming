import Tracklist from "./Tracklist"

const Playlist = (props) => {
    const handleInputChange = (e) => {
        props.onNameChange(e.target.value)
    }

    const handleButtonClick = (e) => {
        props.onSavePlaylist()
    }

    return (
        <div>
           <h2>Playlist</h2>
            <input type="text" value={props.playlistname} onChange={handleInputChange} />
            <Tracklist tracklist={props.tracklist} onRemove={props.onRemove} isPlaylist={true} />
            <button type="button" onClick={handleButtonClick}>Save Playlist</button>
        </div>
    )
}

export default Playlist
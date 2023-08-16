import Tracklist from "./Tracklist"

const SearchResults = (props) => {
    return (
        <div>
            <Tracklist tracklist={props.tracklist} onAdd={props.onAdd} isPlaylist={false} />
        </div>
    )
}


export default SearchResults
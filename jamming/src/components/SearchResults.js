import Tracklist from "./Tracklist"

const SearchResults = (props) => {
    return (
        <div>
            <h2>Results</h2>
            <Tracklist tracklist={props.tracklist} onAdd={props.onAdd} isPlaylist={false} />
        </div>
    )
}


export default SearchResults
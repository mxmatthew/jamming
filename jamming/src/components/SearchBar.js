import '../styles/searchbar.css';

const SearchBar = (props) => {
    const handleInputChange = (e) => {
        props.onInputChange(e.target.value)
    }

    return (
        <div className="searchBar">
            <input type="text" value={props.playlistname} onChange={handleInputChange} placeholder="Search Spotify..." />
        </div>
    )
}

export default SearchBar
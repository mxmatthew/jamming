const SearchBar = (props) => {
    const handleInputChange = (e) => {
        props.onInputChange(e.target.value)
    }

    return (
        <div>
            <input type="text" value={props.playlistname} onChange={handleInputChange} />
        </div>
    )
}

export default SearchBar
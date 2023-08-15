const Track = (props) => {
    const handleButtonClick = (e) => {  props.isPlaylist ? props.onRemove(props.trackdata) : props.onAdd(props.trackdata); };

    return (
        <div>
            {props.trackdata.name}
            <button type="button" onClick={handleButtonClick} >  {props.isPlaylist  ? "Remove" : "Add"} </button>
        </div>
    )
}

export default Track;
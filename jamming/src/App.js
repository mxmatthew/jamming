import Tracklist from './components/Tracklist';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import {useState} from 'react';
import Spotify from './Spotify';

import './styles/app.css';

const tracklist_data = [
  {
    name: 'Test 1',
    artist: 'The Testers',
    album: 'The Test',
    id: 1,
    uri: 'https://open.spotify.com/track/1NPXzq35N65IKJWmkthwaC?si=9290249b012e467c'
  },
  {
    name: 'Test 2',
    artist: 'The Testers',
    album: 'The Test',
    id: 2,
    uri: 'https://open.spotify.com/track/1NPXzq35N65IKJWmkthwaC?si=9290249b012e467c'
  },
  {
    name: 'Test 3',
    artist: 'The Testers',
    album: 'The Test',
    id: 3,
    uri: 'https://open.spotify.com/track/1NPXzq35N65IKJWmkthwaC?si=9290249b012e467c'
  },
  {
    name: 'Test 4',
    artist: 'The Testers',
    album: 'The Test',
    id: 4,
    uri: 'https://open.spotify.com/track/1NPXzq35N65IKJWmkthwaC?si=9290249b012e467c'
  },
  {
    name: 'Test 5',
    artist: 'The Testers',
    album: 'The Test',
    id: 5,
    uri: 'https://open.spotify.com/track/1NPXzq35N65IKJWmkthwaC?si=9290249b012e467c'
  },
]


function App() {
  const [searchResults, setSearchResults] = useState(tracklist_data);
  const [playlistResults, setPlaylistResults] = useState(tracklist_data);
  const [playlistName, setPlaylistName] = useState("New Playlist");

  const addTrack = (track) => {
    if (playlistResults.indexOf(track) < 0) {
      setPlaylistResults((prevResults) => [...prevResults, track]);
    } else {
      alert('Already in playlist!');
    }
  }

  const removeTrack = (track) => {
    setPlaylistResults((prevResults) => prevResults.filter((prevTrack) => prevTrack.id !== track.id));
  }

  const changePlaylistName = (playlistName) => {
    setPlaylistName(playlistName);
  }

  const savePlaylist = () => {
    const saveTracks = playlistResults.map((track) => track.uri)
    console.log(saveTracks)
  }

  const searchTrack = (value) => {
    Spotify.search(value).then(setSearchResults);
  }

  return (
    <div className="App">
      <div className="SearchBox">
        <SearchBar onInputChange={searchTrack} />
        <SearchResults tracklist={searchResults} onAdd={addTrack} />
      </div>
       
       <Playlist playlistname={playlistName} tracklist={playlistResults} onRemove={removeTrack} onNameChange={changePlaylistName} onSavePlaylist={savePlaylist} />
    </div>
  );
}

export default App;

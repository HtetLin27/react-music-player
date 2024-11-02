 
 import './styles/app.scss'

import Player from "./components/Player";
import Song from "./components/Song";
import Library from './components/Library';


//Import Util

import data from "./util"
import { useState } from 'react';
import Nav from './components/Nav';

function App() {
  
  const [libraryStatus,setLibraryStatus] = useState(false);
  const [songs,setSongs] = useState(data());
  const [currentSong,setCurrentSong] = useState(songs[0])
  const [isPlaying,setIsPlaying] = useState(false)
  return (
    <div className={`App ${libraryStatus ? 'library-active' : ''}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player 
        setIsPlaying={setIsPlaying} 
        isPlaying={isPlaying} 
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}/>
      <Library libraryStatus={libraryStatus} setSongs={setSongs} songs={songs} setCurrentSong={setCurrentSong}/>
    </div>
  );
}

export default App;

import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({songs,setCurrentSong,setSongs,libraryStatus}) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
        <h2>Library</h2>
        <div className="library-songs">
            {
                songs.map((song)=>(
                    <LibrarySong  
                    songs={songs}
                    setSongs={setSongs}
                    key={song.id} song={song} setCurrentSong ={setCurrentSong}/>
                ))
            }
        </div>
    </div>
  )
}

export default Library
import React from 'react'

const LibrarySong = ({song,songs,setCurrentSong,setSongs}) => {
  const songSelectHandler = (song)=>{
    setCurrentSong(song)
    const newSongs = songs.map((sng)=>{
      if(sng.id === song.id){
        return{
          ...sng,active:true
        }
      }else{
        return{
          ...sng,active:false
        }
      }
    })
    setSongs(newSongs)
  }
  return (
   <div onClick={()=>songSelectHandler(song)} 
   className={`library-song ${song.active ? 'selected': ''}`}>
    <img src={song.cover} alt={song.name} />
    <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
    </div>
   </div>
  )
}

export default LibrarySong
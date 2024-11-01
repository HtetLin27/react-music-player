import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay,faAngleRight,faAngleLeft,faPause} from '@fortawesome/free-solid-svg-icons'


const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  songs,
  setSongs,
  setCurrentSong}) => {

  const audioRef = useRef(null)

  useEffect(()=>{
    setIsPlaying(true)
    if(isPlaying){
      audioRef.current.play()
    }
    return () => {
      // Cleanup
    };
  },[currentSong])

  const playSongHandler = ()=>{
    if(isPlaying){
      audioRef.current.pause();
      setIsPlaying(!isPlaying)
    }else{
      audioRef.current.play();
      setIsPlaying(!isPlaying)
    }
  }

  const timeUpdateHandler = (e)=>{
    const current = e.target.currentTime;
    const duration = e.target.duration
    
    setSongInfo(
      {...songInfo,currentTime: current,duration}
    )
  }
  
  const getTime = (time)=>{
    return(
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    )
  }

  const dragHandler =(e)=>{
    audioRef.current.currentTime = e.target.value
    setSongInfo({
      ...songInfo,currentTime: e.target.value
    })
  }

  const[songInfo,setSongInfo] = useState({
    currentTime:0,
    duration:0,
  })

  const skipTrackHandler = (direction)=>{
    let currentIndex = songs.findIndex((song)=> song.id === currentSong.id);
    if(direction === 'skip-forward'){
      if(currentIndex === songs.length -1){
        setCurrentSong(songs[0])
      }else{
        setCurrentSong(songs[currentIndex + 1])
      }
    }
    if(direction === 'skip-back'){
      if(!currentIndex){
        setCurrentSong(songs[songs.length -1])
      }else{
        setCurrentSong(songs[currentIndex - 1])
      }
    }
    
  }

  return (
    <div className="player">
        <div className="time-control">
            <p>{getTime(songInfo.currentTime)}</p>
            <input
               min={0} 
               max={songInfo.duration || 0} 
               value={songInfo.currentTime} 
               onChange={dragHandler}
               type="range"
            />
            <p>{getTime(songInfo.duration)}</p>
        </div>
        <div className="play-control">
            <FontAwesomeIcon onClick={()=>skipTrackHandler('skip-back')} className='skip-back' size='2x' icon={faAngleLeft}/>

            <FontAwesomeIcon onClick={playSongHandler} size='2x' className='play' icon={isPlaying ? faPause : faPlay}/>
    
            <FontAwesomeIcon onClick={()=>skipTrackHandler('skip-forward')} className='skip-forward' size='2x' icon={faAngleRight}/>
        </div>
        <audio 
          onTimeUpdate={timeUpdateHandler} 
          onLoadedMetadata={timeUpdateHandler}
          ref={audioRef} 
          src={currentSong.audio} 
        ></audio>
    </div>
  )
}

export default Player
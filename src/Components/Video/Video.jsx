import React, { useRef } from 'react';
import './Video.css'
import video from '../../assets/Oggy.mp4'


const Video = ({ play, setPlay }) => {
    
    const player = useRef(null)

    const close = (e) => {
        if (e.target === player.current) {
            setPlay(false);
        }
    }



  return (
    <div className={`video-player ${play ? '' : 'hide'}`} ref={player} onClick={close} >
      <video src={video} autoPlay muted controls ></video>
    </div>
  )
}
import './Video.css'
export default Video

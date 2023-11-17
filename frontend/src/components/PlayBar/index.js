import ProfileButton from "./ProfileButton";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/modal";
import "./playbar.css"
import SongDisplay from "./SongDisplay";
import Controls from "./Controls";
import { useEffect, useRef, useState } from "react";
import songfile from "/Users/eltionbehrami/apple_music_clone/frontend/src/01 The Adults Are Talking.mp3"




const PlayBar = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const audioRef = useRef(null)
    const isPlaying = useSelector(state => state.playbar.isPlaying)
    const [volume, setVolume] = useState(0)
    const currentSong = useSelector(state => state.playbar.currentSong)

    debugger



    const handleVolume = e => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
            audioRef.current.play();
            } else {
            audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    let sessionLinks; 
    if (sessionUser) {
        sessionLinks = (<ProfileButton user={sessionUser} />)
    } else {
        sessionLinks = (
            <>
                <button id="login-button" onClick={() => dispatch(openModal('login'))}>Sign In</button>
                <button id="signup-button"onClick={() => dispatch(openModal('signup'))}>Sign Up</button>

            </>
        );
    } 

    return (
            <div className="playbar">
                <audio ref={audioRef} src={currentSong?.songUrl} autoPlay={isPlaying}></audio>
                <Controls audioRef={audioRef}/>
                <SongDisplay />
                <div className="volume-container">
                    <input id="volume" type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolume}></input>
                </div>
                <li className="session-links">
                {sessionLinks}
                </li>    
            </div>  
    )
}

export default PlayBar;
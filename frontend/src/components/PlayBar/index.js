import ProfileButton from "./ProfileButton";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/modal";
import "./playbar.css"
import SongDisplay from "./SongDisplay";
import Controls from "./Controls";
import { useCallback, useEffect, useRef, useState } from "react";
import { getSong } from "../../store/songs";





const PlayBar = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const audioRef = useRef(null);
    const progressBarRef = useRef();
    const playAnimationRef = useRef();
    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)
    const isPlaying = useSelector(state => state.playbar.isPlaying);
    const [volume, setVolume] = useState(.5);


    const queue = useSelector(state => state.playbar.queue);
    const songId = useSelector(state => state.playbar.currentSong);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    
    const currentSongId = queue[currentSongIndex];
    

    const currentSong = useSelector(getSong(currentSongId));

    

    const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
    };

    const repeat = useCallback(() => {
        const currentTime = audioRef.current.currentTime;
        setProgress(currentTime);
        progressBarRef.current.value = currentTime;
        progressBarRef.current.style.setProperty(
          '--range-progress',
          `${(progressBarRef.current.value / duration) * 100}%`
        );
    
        playAnimationRef.current = requestAnimationFrame(repeat);
      }, [audioRef, duration, progressBarRef, setProgress]);
  



    useEffect(() => {
        if (queue.length > 0) {
            setCurrentSongIndex((queue.indexOf(songId)))
        } else {
            setCurrentSongIndex(0)
        }
    }, [queue, songId]);
    


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
            playAnimationRef.current = requestAnimationFrame(repeat);
            } else {
            audioRef.current.pause();
            cancelAnimationFrame(playAnimationRef.current);
            }
        }
    }, [isPlaying, audioRef, repeat]);

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
                <audio ref={audioRef} src={currentSong?.songUrl} autoPlay={isPlaying} onLoadedMetadata={onLoadedMetadata}></audio>
                <Controls audioRef={audioRef} currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} queue={queue} currentSong={songId} progressBarRef={progressBarRef} duration={duration} setProgress={setProgress}/>
                <SongDisplay progressBarRef={progressBarRef} audioRef={audioRef} progress={progress} setProgress={setProgress} duration={duration} setDuration={setDuration}/>
                <div className="volume-container">
                    <input id="volume" type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolume} setDuration={setDuration}></input>
                </div>
                <li className="session-links">
                {sessionLinks}
                </li>    
            </div>  
    )
}

export default PlayBar;
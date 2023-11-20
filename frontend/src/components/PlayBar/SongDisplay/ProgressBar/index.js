
const ProgressBar = ({progressBarRef, audioRef, progress, duration, setDuration}) => {


    const handleProgress = () => {
        audioRef.current.currentTime = progressBarRef.current.value
    }



    return (
        <div className="progress-bar">
            <span className="time-current">{progress}</span>
            <input type="range" ref={progressBarRef} onChange={handleProgress} />
            <span className="time">{duration}</span>
        </div>
    )
}

export default ProgressBar;``
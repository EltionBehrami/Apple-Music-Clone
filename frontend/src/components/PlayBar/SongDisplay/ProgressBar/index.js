import "./ProgressBar.css"

const ProgressBar = ({progressBarRef, audioRef, progress, duration, setDuration}) => {


    const handleProgress = () => {
        audioRef.current.currentTime = progressBarRef.current.value
    }

    function formatDuration(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.round(seconds % 60);
        
        if (minutes < 10) {
            return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
        } else {
            return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
        }
    }



    return (
        <div className="progress-bar">
            <span className="time-current">{formatDuration(progress)}</span>
            <input id="progress" type="range" ref={progressBarRef} value={0} onChange={handleProgress} />
            <span className="time">{formatDuration(duration)}</span>
        </div>
    )
}

export default ProgressBar;
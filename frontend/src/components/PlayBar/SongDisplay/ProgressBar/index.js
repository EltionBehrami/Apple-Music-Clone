import "./ProgressBar.css"

const ProgressBar = ({progressBarRef, audioRef, progress, duration, setDuration}) => {


    const handleProgress = () => {
        audioRef.current.currentTime = progressBarRef.current.value
    }

    const formatTime = (time) => {
        if (time && !isNaN(time)) {
        const minutes = Math.floor(time / 60);
        const formatMinutes =
            minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(time % 60);
        const formatSeconds =
            seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${formatMinutes}:${formatSeconds}`;
        }
        return '00:00';
    };



    return (
        <div className="progress-bar">
            <span className="time-current">{formatTime(progress)}</span>
            <input id="progress" type="range" ref={progressBarRef} onChange={handleProgress} />
            <span className="time">{formatTime(duration)}</span>
        </div>
    )
}

export default ProgressBar;
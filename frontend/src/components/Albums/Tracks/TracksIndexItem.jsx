import TrackMenuButton from "./TrackMenuButton/TrackMenuButton";
import "./TracksIndexItem.css"
import React, { useState, useEffect } from 'react';

const TracksIndexItem = ({ track, isActive, onClick }) => {

const [duration, setDuration] = useState(null);

    useEffect(() => {
        function getMP3Duration(songUrl, callback) {
            const audio = new Audio();

        audio.addEventListener('loadedmetadata', () => {
            const duration = audio.duration;
            audio.remove();
            callback(duration);
        });

            audio.src = songUrl;
        }

        getMP3Duration(track.songUrl, setDuration);
    }, [track.songUrl]);

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
        <div className={isActive ? 'track-item-container-active' : 'track-item-container'}>
            <div className="left-track-container">
                <span id="track-number">{track.id}</span>
                <span id="track-title">{track.title}</span>
            </div>
            <div className="right-track-container">
                <span id="track-duration">{duration !== null ? formatDuration(duration) : ''}</span>
                <TrackMenuButton />
            </div>
        </div>
    );
};

export default TracksIndexItem;



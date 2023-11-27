# Cherry Music

## Brief Explanation

Cherry Music is a clone of Apple Music, providing a seamless music streaming experience. Key features include albums, playlists, a dynamic playbar, and a robust search functionality.

## Live Site

[Cherry Music - Live Site](https://cherry-music.onrender.com/)

## Technologies Used

- **Frontend:** React, Redux, CSS
- **Backend:** Ruby on Rails
- **Database:** PostgreSQL
- **Cloud Services:** AWS

## Key Features

### Playbar Functionality

Cherry Music incorporates a dynamic playbar, enhancing user control during music playback. The playbar ensures seamless transitions between songs, synchronized state across components, and a smooth music navigation experience.

```javascript
const next = () => {
    if (currentSongIndex < queue.length - 1) {
        setCurrentSongIndex(currentSongIndex + 1);
    }
}

const previous = () => {
    if (currentSongIndex > 0) {
        setCurrentSongIndex(currentSongIndex - 1);
    }
}

const play = () => {
    if (currentSong) {
        audioRef.current.currentTime = audioRef.current.currentTime || 0;
        dispatch(playSong());
    }
};

const pause = () => {
    dispatch(pauseSong());
}
```

### Creating Playlists

Users can personalize their music experience by creating and managing playlists. The implementation includes CRUD operations for playlists, ensuring a tailored and consistent playlist experience across devices.

#### Challenges

- **Challenge 1:** Implementing a fast and responsive search algorithm.
- **Challenge 2:** Creating an intuitive and user-friendly search interface.

#### Solutions

- **Solution 1:** Utilized Elasticsearch for efficient and real-time search functionality.
- **Solution 2:** Designed a clean and responsive search UI with instant suggestions.

## Conclusion

Cherry Music delivers a feature-rich music streaming experience, combining the elegance of Apple Music with the flexibility of a custom-built solution. The use of React, Redux, Ruby on Rails, PostgreSQL, and AWS showcases a harmonious synergy between frontend, backend, database, and cloud technologies, providing users with a seamless and enjoyable music platform.


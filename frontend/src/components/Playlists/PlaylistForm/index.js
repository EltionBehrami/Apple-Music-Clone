import { useDispatch, useSelector } from "react-redux";
import { createPlaylist } from "../../../store/playlists";
import { useState } from "react";

import "./PlaylistForm.css"

const PlaylistForm = () => {
    const dispatch = useDispatch(); 
    const [title, setTitle] = useState(); 
    const [description, setDescription] = useState();
    const currentUserId = useSelector(state => state.session.user.id)

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }

    const changeDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = (e) => {
        let playlist = {userId: currentUserId, title, description}
        dispatch(createPlaylist(playlist))
    }


    return (
    <div className="playlist-form-container">
        <div className="new-playlist-header">New playlist</div>
        <form className="playlist-form" onSubmit={handleSubmit}>
            <div id="top-form-div">
                <div id='playlist-title-input-container'>
                    <input id="playlist-title-input" type="text" value={title} placeholder="Playlist title"onChange={changeTitle}/>
                </div>
                <div>
                    <textarea id= "playlist-description-input" value={description} placeholder="Description (optional)"onChange={changeDescription}/>
                </div>
            </div>
            <div id="create-button-container">
                <input id="create-button" type="submit" value= "Create" />
            </div>
        </form>
    </div>

    )

}

export default PlaylistForm
import "./Splash.css"
const Splash = () => {

    return (
        <div id="splash-container">
            <div className="class-header-container">
                <div className="splash-title">
                    <img src="frontend/public/cherry-music-logo.png"/>
                    Cherry Music
                </div>
                <div className="splash-discover">Discover new music every day.</div>
                <div className="splash-browse">Browse through albums and songs and create your own playlists.</div>
            </div>
            <div className="splash-image-container">
                <div> <img id="splash-image1" src="https://www.apple.com/v/apple-music/y/images/overview/hero_screen_radio__ctc93fzi4sgi_medium_2x.jpg"></img></div>
                <div> <img id="splash-image2" src="https://www.apple.com/v/apple-music/y/images/overview/hero_screen_now_playing__rn6l7fjrqrey_medium_2x.jpg"></img></div>
                <div> <img id="splash-image3" src="https://www.apple.com/v/apple-music/y/images/overview/hero_screen_lyrics__ganwsph31wq6_medium_2x.jpg"></img></div>
                <div> <img id="splash-image4" src="https://www.apple.com/v/apple-music/y/images/overview/hero_screen_listen_now__efapctigl9qq_medium_2x.jpg"></img></div>
                <div> <img id="splash-image5" src="https://www.apple.com/v/apple-music/y/images/overview/hero_screen_search__enln0l89zrki_medium_2x.jpg"></img></div>
            </div>
        </div>
    )

}

export default Splash; 
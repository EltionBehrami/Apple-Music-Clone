import { useDispatch, useSelector } from "react-redux";
import AlbumIndexItem from "../Albums/AlbumsIndexItem";
import { fetchAlbum, getAlbum } from "../../store/albums";
import { useEffect, useState } from "react";
import "./Browse.css"
import StaticAlbumItem from "./StaticAlbumItem";

const Browse = () => {

    // four different getAlbum useSelectors that will give albumIds for 
    // useEffect to actualyl fetch those albums, will probably have to do four different ones
    // // // const secondAlbumId = 2
    const dispatch = useDispatch() 
    const firstAlbumId = 9
    const secondAlbumId = 10
    const thirdAlbumId = 3
    const fourthAlbumId = 2
    const fifthAlbumId = 1
    const album = useSelector(getAlbum(firstAlbumId))
    const album2 = useSelector(getAlbum(secondAlbumId))
    const album3 = useSelector(getAlbum(thirdAlbumId))
    const album4 = useSelector(getAlbum(fourthAlbumId))
    const album5 = useSelector(getAlbum(fifthAlbumId))

    
    // // debugger
    useEffect(() => {
        dispatch(fetchAlbum(firstAlbumId))
        dispatch(fetchAlbum(secondAlbumId))
        dispatch(fetchAlbum(thirdAlbumId))
        dispatch(fetchAlbum(fourthAlbumId))
        dispatch(fetchAlbum(fifthAlbumId))
    }, [dispatch]) 

    
    return (
        <>
        <div className="static-playlists">
            <div id="testing-static-playlist">
                <StaticAlbumItem album={album} />
            </div>
            <div>
                <StaticAlbumItem album={album2} />
            </div>
            <div>
                <StaticAlbumItem album={album3} />
            </div>
            <div>
                <StaticAlbumItem album={album4} />
            </div>
            <div>
                <StaticAlbumItem album={album5} />
            </div>
        </div>

        <div>
            <div> songs index 1</div>
            <div> songs index 2</div>
        </div>

        </>
    )
    
}
// const dispatch = useDispatch();
// const [albums, setAlbums] = useState([]);
// const albumIds = [1, 2]; // Array of album IDs

// useEffect(() => {
    //     albumIds.forEach((albumId) => {
        //         dispatch(fetchAlbum(albumId)).then((response) => {
            //             debugger
            //             setAlbums((prevAlbums) => [...prevAlbums, response.payload]);
            //         });
            //     });
            // }, [dispatch]);
            
            export default Browse;
            {/* {albums.map((album) => (
                <div key={album} className="testing-fake-playlist">
                <AlbumIndexItem album={album} />
                </div>
            ))} */}
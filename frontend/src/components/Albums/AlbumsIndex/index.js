import { useSelector } from "react-redux";
import { getAlbums } from "../../../store/albums";





const AlbumsIndex = () => {
    const albums = useSelector(getAlbums)
    debugger
    return (
        <>
        <div> HELLO FROM ALBUM INDEX</div>
        </>
    )
}

export default AlbumsIndex;
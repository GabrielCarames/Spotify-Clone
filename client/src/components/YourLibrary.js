import useYourLibraryHelper from "../hooks/useYourLibraryHelper"
import LikedSongs from "./LikedSongs"
import Playlists from "./Playlists"

const YourLibrary = ({accessToken}) => {
    console.log("accestokentaojdadas", accessToken)
    const { playlists, likedSongs } = useYourLibraryHelper(accessToken)
    console.log("play", playlists)

    return (
        <div className="library-container">
            <h3 className="library__title">Playlists</h3>
            <div className="library-playlists">
                <div className="library-liked-songs-container">
                    <ul className="library-liked-songs list">
                        {likedSongs && <LikedSongs likedSongs={likedSongs.items} />}
                    </ul>
                    <h2 className="library-liked-songs__title">Liked Songs</h2>
                    <span className="library-liked-songs__length">{likedSongs && likedSongs.total} liked songs</span>
                </div>
                <div className="library-playlists-container">
                    <ul className="library-playlist list">
                        {playlists && <Playlists playlists={playlists} />}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default YourLibrary
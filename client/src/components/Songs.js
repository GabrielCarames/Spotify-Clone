import { useSelector } from "react-redux"
import useSongsHelper from "../hooks/useSongsHelper"
import useYourLibraryHelper from "../hooks/useYourLibraryHelper"

const Songs = ({accessToken}) => {
    const content = useSelector(state => state.contentReducer)
    const { playlists } = useYourLibraryHelper(accessToken)

    const playlistDemeirdasolodeprueba = playlists[2]
    const { playlist } = useSongsHelper(content)

    // const playlist = playlists[2]
    console.log("brotha", playlist)

    return (
        <div className="songs-container">
            <header className="songs-header">
                <div className="songs-context">
                    <img className="songs__image" src={playlistDemeirdasolodeprueba.images[0].url} alt="" />
                    <div className="songs-data">
                        <p className="songs__context-data">Gabriel 144 canciones, cerca de 10 h</p>
                        <h1 className="songs__context-title">{playlistDemeirdasolodeprueba.name}</h1>
                        <p className="songs__context-type">{playlistDemeirdasolodeprueba.public ? "PUBLIC PLAYLIST" : "PRIVATE PLAYLIST"}</p>
                    </div>
                </div>
            </header>
            <div className="songs-body">
                <div className="songs-player-buttons">

                </div>
                <div className="songs-list-container">
                    <ol className="songs-list">
                        {/* {
                            playlist.tracks.map
                        } */}
                        <li className="list__item">
                            <img className="list__image" src="" alt="" />
                            <div className="list__song-data">
                                <h5 className="list__song-title">Call me Maybe</h5>
                                <h6 className="list__song-author">Carly Rae Jepsen</h6>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Songs
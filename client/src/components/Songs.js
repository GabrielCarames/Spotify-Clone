import { useDispatch, useSelector } from "react-redux"
import useSongsHelper from "../hooks/useSongsHelper"
import useYourLibraryHelper from "../hooks/useYourLibraryHelper"
import { useEffect } from "react"
import { useState } from "react"

const Songs = ({accessToken}) => {
    console.log("songs", accessToken)
    // console.log("content", content)
    const [play, setPlay] = useState()
    const { playlist, millisToMinutesAndSeconds } = useSongsHelper(accessToken)
    const dispatch = useDispatch()
    const song = useSelector(state => state.songReducer)

    console.log("brotha", playlist)
    return (
        <div className="songs-container">
            <header className="songs-header">
                <div className="songs-context">
                    <img className="songs__image" src={playlist && playlist.images[0].url} alt="" />
                    <div className="songs-data">
                        <p className="songs__context-data">Gabriel 144 canciones, cerca de 10 h</p>
                        <h1 className="songs__context-title">{playlist && playlist.name}</h1>
                        <p className="songs__context-type">{playlist &&  playlist.public ? "PUBLIC PLAYLIST" : "PRIVATE PLAYLIST"}</p>
                    </div>
                </div>
            </header>
            <div className="songs-complementary">
                <div className="songs-player-buttons">
                    <button className={song.isPlaying ? "songs__play-button--active" : "songs__play-button"} onClick={() => {setPlay(true); dispatch({type: '@setSong', payload: playlist.uri}); dispatch({type: '@songState', payload: true})}}>
                        <svg height="28" role="img" width="28" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg>
                    </button>
                    <button className={song.isPlaying ? "songs__stop-button--active" : "songs__stop-button"} onClick={() => {setPlay(false); dispatch({type: '@setSong', payload: playlist.uri}); dispatch({type: '@songState', payload: false})}}>
                        <svg  height="28" role="img" width="28" viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="4" height="18" fill="currentColor"></rect><rect x="15" y="3" width="4" height="18" fill="currentColor"></rect></svg>
                    </button>
                </div>
                <div className="songs-navbar navbar">
                    <p className="navbar__numeral">#</p>
                    <h5 className="navbar__title">TITLE</h5>
                    <h5 className="navbar__album">ALBUM</h5>
                    <h5 className="navbar__date-added">DATE ADDED</h5>
                    <i className="far fa-clock"></i>
                </div>
            </div>
            <div className="songs-body">
                <div className="songs-list-container">
                    <ol className="songs-list">
                        {
                            playlist && playlist.tracks.items.map((song, id) => {
                                return (
                                    <li className="list__item" key={id} onClick={() => {dispatch({type: '@setSong', payload: song.track.uri})}}>
                                        <div className="list__index">{id+1}</div>
                                        <svg height="32" role="img" width="32" viewBox="0 0 24 24" className="list__index--play"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg>
                                        <div className="list__song-data">
                                            <img className="list__image" src={song.track.album.images[0].url} alt="" />
                                            <div className="list__description-container">
                                                <p className="list__song-title">{song.track.name}</p>
                                                <span className="list__song-author">{song.track.artists[0].name}</span>
                                            </div>
                                        </div>
                                        <a className="list__album" href="#/">{song.track.album.name}</a>
                                        <p className="list__date-added">
                                            {
                                                new Date(song.added_at).toLocaleDateString(
                                                    'en-gb',
                                                    {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                        timeZone: 'utc'
                                                    }
                                                )
                                            }
                                        </p>
                                        <p className="list__duration">{millisToMinutesAndSeconds(song.track.duration_ms)}</p>
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Songs
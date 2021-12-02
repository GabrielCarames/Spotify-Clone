import { useDispatch, useSelector } from "react-redux"
import useSongsHelper from "../hooks/useSongsHelper"

const Songs = () => {
    const dispatch = useDispatch()
    const { playlist, millisToMinutesAndSeconds, defineClassName, playSong, stopSong } = useSongsHelper(dispatch)
    const song = useSelector(state => state.songReducer)
    console.log("brotha", playlist)
    return (
        <div className="songs-container">
            <header className="songs-header">
                <div className="songs-context">
                    <div className="songs-image-container">
                        {playlist && playlist.images.length >= 1 ? <img className="songs__image" src={playlist.images[0].url} alt="" /> : <svg className="songs__image no-image" width="80" height="81" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg"><title>Playlist Icon</title><path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="currentColor" fill-rule="evenodd"></path></svg>}
                    </div>
                    <div className="songs-data">
                        <p className="songs__context-data">{playlist && playlist.owner.display_name} {playlist && playlist.tracks.total} songs</p>
                        <h1 className="songs__context-title">{playlist && playlist.name}</h1>
                        <p className="songs__context-type">{playlist &&  playlist.public ? "PUBLIC PLAYLIST" : "PRIVATE PLAYLIST"}</p>
                    </div>
                </div>
            </header>
            <div className="songs-container-background"></div>
            <div className="songs-background">
                <div className="songs-complementary">
                    <div className="songs-player-buttons">
                        <button className={song.isPlaying ? "songs__play-button--active" : "songs__play-button"} onClick={() => {dispatch({type: '@setSong', payload: playlist.uri}); dispatch({type: '@songState', payload: true})}}>
                            <svg height="28" role="img" width="28" viewBox="0 0 24 24" aria-hidden="true"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg>
                        </button>
                        <button className={song.isPlaying ? "songs__stop-button--active" : "songs__stop-button"} onClick={() => {dispatch({type: '@setSong', payload: playlist.uri}); dispatch({type: '@songState', payload: false})}}>
                            <svg height="28" role="img" width="28" viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="4" height="18" fill="currentColor"></rect><rect x="15" y="3" width="4" height="18" fill="currentColor"></rect></svg>
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
                                playlist && playlist.tracks.items.map((songItem, id) => {
                                    return (
                                        <li className={song.isPlaying ? song.uri[0] === songItem.track.uri ? "list__item active" : "list__item": "list__item"} key={id} onClick={() => {dispatch({type: '@setSong', payload: songItem.track.uri})}}>
                                            <div className={defineClassName(song.isPlaying, song.uri[0], songItem.track.uri, "list__index")} >{id+1}</div>
                                            <button className={defineClassName(song.isPlaying, song.uri[0], songItem.track.uri, "list__play-button")} onClick={() => playSong(song.uri[0], songItem.track.uri)} ><svg height="32" role="img" width="32" viewBox="0 0 24 24"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon></svg></button>
                                            <button className={defineClassName(song.isPlaying, song.uri[0], songItem.track.uri, "list__stop-button")} aria-label="Pausar" tabindex="-1" aria-expanded="false" onClick={() => stopSong(song.uri[0], songItem.track.uri)} ><svg height="32" role="img" width="32" viewBox="0 0 24 24"><rect x="5" y="3" width="4" height="18" fill="currentColor"></rect><rect x="15" y="3" width="4" height="18" fill="currentColor"></rect></svg></button>
                                            <img className={defineClassName(song.isPlaying, song.uri[0], songItem.track.uri, "list__song-is-playing")} alt="playingSong" src="https://open.scdn.co/cdn/images/equaliser-animated-green.f93a2ef4.gif" width="14" height="14" />
                                            <div className="list__song-data">
                                                <img className="list__image" src={songItem.track.album.images[0].url} alt="" />
                                                <div className="list__description-container">
                                                    <p className="list__song-title">{songItem.track.name }</p>
                                                    <p className="list__song-author">{songItem.track.artists[0].name}</p>
                                                </div>
                                            </div>
                                            <a className="list__album" href="#/">{songItem.track.album.name}</a>
                                            <p className="list__date-added">
                                                {new Date(songItem.added_at).toLocaleDateString('en-gb', {year: 'numeric', month: 'long', day: 'numeric', timeZone: 'utc'})}
                                            </p>
                                            <p className="list__duration">{millisToMinutesAndSeconds(songItem.track.duration_ms)}</p>
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Songs
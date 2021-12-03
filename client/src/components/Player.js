import { useDispatch, useSelector } from "react-redux"
import SpotifyPlayer from "react-spotify-web-playback"

const Player = ({ accessToken }) => {
    const dispatch = useDispatch()
    const song = useSelector(state => state.songReducer)

    if (!accessToken) return null

    return (
        <SpotifyPlayer
            token={accessToken}
            showSaveIcon
            callback={state => {
                if (state.isPlaying) dispatch({type: '@songState', payload: true})
                if (!state.isPlaying) dispatch({type: '@songState', payload: false})
            }}
            play={song.isPlaying}
            uris={song.uri[0]}
            styles={{
                activeColor: '#fff',
                bgColor: '#181818',
                color: '#fff',
                loaderColor: '#fff',
                sliderColor: '#1cb954',
                trackArtistColor: '#ccc',
                trackNameColor: '#fff',
            }}
        />
    )
}

export default Player
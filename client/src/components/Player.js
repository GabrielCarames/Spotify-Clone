import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import SpotifyPlayer from "react-spotify-web-playback"

const Player = ({ accessToken, trackUri }) => {
    const [play, setPlay] = useState(false)
    // const token = JSON.parse(localStorage.getItem('userLogged'))
    useEffect(() =>
        {
            console.log("hoalsdasdasdasd")
            setPlay(true)
        } 

    , [trackUri])
    //esto eera !accessToken.accessToken, guerda que a veces se pone con objeto y a veces no
    console.log("accestotek", accessToken)
    // console.log("tokenasdaskdojasodadjajsd´qwoeqwdasd", token)

    useEffect(() => {
        console.log("palystate", play)
    }, [play])

    const a = [
        "spotify:track:4nmne9J3YCEdhvjTzwiAgu",
        "spotify:track:7DD1ojeTUwnW65g5QuZw7X",
        "spotify:track:1PnuVfURSyhhOI2NCXTLSF",
        "spotify:track:47wPvRG8FEwbZP22UBgTQr",
        "spotify:track:41pOIT2t1rvr2Trg1HQChZ",
        "spotify:track:72vzpLLJZgvG7TqKar57TX",
        "spotify:track:54eZmuggBFJbV7k248bTTt",
        "spotify:track:1a8JpAL3vbAdXYrEABvOtb",
        "spotify:track:500h8jAdr7LvzzXlm1qxtK",
        "spotify:track:2NjhV99ncY4A5lSkTHvTtU"
      ]

    const dispatch = useDispatch()
    const song = useSelector(state => state.songReducer)
    console.log("ISPLAYINGH", song)
    if (!accessToken) return null

    return (
        <SpotifyPlayer
            token={accessToken}
            showSaveIcon
            callback={state => {
                console.log("SOYESTAS", state)
                if (state.isPlaying) dispatch({type: '@songState', payload: true})
            if (!state.isPlaying) dispatch({type: '@songState', payload: false})
            }}
            play={song.isPlaying}
            uris={song.uri[0]} //a
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
import { useState, useEffect } from "react"
import SpotifyPlayer from "react-spotify-web-playback"

const Player = ({ accessToken, trackUri }) => {
    const [play, setPlay] = useState(false)

    useEffect(() => setPlay(true), [trackUri])
    //esto eera !accessToken.accessToken, guerda que a veces se pone con objeto y a veces no
    console.log("accestotek", accessToken)
    if (!accessToken) return null

    return (
        <SpotifyPlayer
            token={"BQCNQBPBJVNtqjPQtKC80IbhHwn5WcAjFesAF4saFfKEkn9EgmC-oyP-_0Sb5jXg8XQuVtoG8uvy6bALf-U1nCYra6HLIpzQtl__hLDrqCVzmSaPHmKKRJKXS8cawXDdFIPbc92A489-GrKjdPiGzJNOAbEmg8fU8tf9HwRL4tiyOUNO2Piq5x1iudBznwlXo0F2lMoQBd6fHj2aLogl"}
            showSaveIcon
            callback={state => {
            if (!state.isPlaying) setPlay(false)
            }}
            play={play}
            uris={["spotify:track:6pSspi3xtrbXr8LqvJ9BJN"]}
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
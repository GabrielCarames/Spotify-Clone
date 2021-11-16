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
            token={"BQA2-cvaBQsYqzUZnm0XDTwEk7eF8yNdOL2x1oqFZhxhKadOcj-eKQzIDp4K8kNjMDPaLrLNQOfqdYQ7jo7MaIvJD_V0ClEXQ6Wi9fwqYDMACmxNPAoNEJpl2rIndkQ5FkSMmfAGHy4eHSOlXhQCyEwP9EZJRiamfAleGErVxvBMrkcV2vqdL0LaiN7w3-Cf7c9hy6WArIGFjAN4pp6Q"}
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
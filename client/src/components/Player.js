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
            token={"BQARlSxPhIiUlr_lhDj0mg8NtdUt7sehOa7oudS1oXcLmyMoxGHuxglozMTifewZZrbKXkRe6KlQmOkvq5kkAXQ2k1Ea1_L2OS-U8lCXtERtPQVEzXW565_o5AhUZH2TwyJDsAHO-qS8KWSn-r0712YZLh8WTwPLe7ixrAZtvsXIcTgtbSkLaGxDvr_T2kBetvwbWzWzz_BEeBHkHS2x"}
            showSaveIcon
            callback={state => {
            if (!state.isPlaying) setPlay(false)
            }}
            play={play}
            uris={["spotify:track:5vdp5UmvTsnMEMESIF2Ym7"]}
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
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
            token={"BQDX-5NoOMe0o8GfCxdyI8yKZZfGv7ZcZdMHQ9SpiPzGfZhWFoGGrhhYZ0U8K_af0xMD7tjPgN6yYsYMSqkk9VjPfdA3as2r-patDUcbONHeZ1nJGHx6U1ribXCB7wmV8jXK8ZYfwUP9n5kBNFpLanX113dToMz4V8Hd8in5owRDRFifgSMgTgvaFxBrbr_oyFS_atNssSl7pk_h76nu"}
            showSaveIcon
            callback={state => {
            if (!state.isPlaying) setPlay(false)
            }}
            play={play}
            uris={["spotify:track:5vdp5UmvTsnMEMESIF2Ym7"]}
        />
    )
}

export default Player
import { useState, useEffect } from "react"
import SpotifyPlayer from "react-spotify-web-playback"

const Player = ({ accessToken, trackUri }) => {
    const [play, setPlay] = useState(false)

    useEffect(() => setPlay(true), [trackUri])

    if (!accessToken.accessToken) return null

    return (
        <SpotifyPlayer
            token={"BQB56PDTdbYU2UIZDbcocLFWBPcD-GhUnTXSROnvAB4k4Sm-oDOqlx6YsxidAkt5RDuNHWHka0EdwyZTO4EHoItXHTUoPpe0b_wClBuLkqcb4HBA8P8UGONipZoUM4zGjoqlY-rQLfkgjr4LMm0rxFvWvooXxWifPEICHeOKkUJ7eg7lCoW0hFwQ2iyA_UH0IdjYbpaAdJ-RoqRohZxT"}
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
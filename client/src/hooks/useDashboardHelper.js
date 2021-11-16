import { useEffect } from "react"
import SpotifyWebApi from "spotify-web-api-node"

export function useDashboardHelper (accessToken) {
    const spotifyApi = new SpotifyWebApi({
        clientId: "d2a7d543ee8141ee9e85e54c63fdd6e3",
    })

    // function chooseTrack(track) {
    //     setPlayingTrack(track)
    //     setSearch("")
    // }

    


    useEffect(() => {
        if (!accessToken) return 
        
    }, [accessToken])

    return {
        
    }
}

export default useDashboardHelper
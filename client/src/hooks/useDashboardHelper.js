import { useEffect } from "react"
import SpotifyWebApi from "spotify-web-api-node"

export function useDashboardHelper (search, setSearch, setSearchResults, accessToken) {
    const spotifyApi = new SpotifyWebApi({
        clientId: "d2a7d543ee8141ee9e85e54c63fdd6e3",
    })

    // function chooseTrack(track) {
    //     setPlayingTrack(track)
    //     setSearch("")
    // }

    useEffect(() => {
        if (!accessToken) return 
        spotifyApi.setAccessToken(accessToken.accessToken)
    }, [accessToken])
    
    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken.accessToken) return
        console.log("searc", search)
        console.log("otek", accessToken)
        
        spotifyApi.searchTracks(search).then(res => {
            console.log("res", res)
        })
    }, [search, accessToken])

    return {
        
    }
}

export default useDashboardHelper
import { useEffect, useState } from "react"
import useAuthenticationHelper from "../hooks/useAuthenticationHelper"
import SpotifyWebApi from "spotify-web-api-node"
import axios from "axios"

const spotifyApi = new SpotifyWebApi({
    clientId: "d2a7d543ee8141ee9e85e54c63fdd6e3",
})
const Dashboard = ({code}) => {
    const [search, setSearch] = useState("queen")
    const [searchResults, setSearchResults] = useState([])
    const accessToken = useAuthenticationHelper(code)


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

    return (
        <div>
            <form>
                <input type="text" placeholder="buscar cancion" onChange={e => setSearch(e.target.value)} />
                <button >buscar</button>
            </form>
        </div>
    )
}

export default Dashboard

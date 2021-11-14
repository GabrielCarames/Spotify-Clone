import { useEffect, useState } from "react"
import useAuthenticationHelper from "../hooks/useAuthenticationHelper"
import useDashboardHelper from "../hooks/useDashboardHelper"
import Player from "./Player"


const Dashboard = ({code}) => {
    const [search, setSearch] = useState("queen")
    const [searchResults, setSearchResults] = useState([])
    const [playingTrack, setPlayingTrack] = useState()
    const accessToken = useAuthenticationHelper(code)
    const { } = useDashboardHelper(search, setSearch, setSearchResults, setPlayingTrack, accessToken)

    return (
        <div>
            <form>
                <input type="text" placeholder="buscar cancion" onChange={e => setSearch(e.target.value)} />
                <button >buscar</button>
            </form>
            <div>
                <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
            </div>
        </div>
    )
}

export default Dashboard

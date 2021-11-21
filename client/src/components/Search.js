import { useEffect, useState } from "react"
import useAuthenticationHelper from "../hooks/useAuthenticationHelper"
import useDashboardHelper from "../hooks/useDashboardHelper"
import Player from "./Player"


const Search = ({accessToken}) => {
    const [search, setSearch] = useState("careless whisper")
    const [searchResults, setSearchResults] = useState([])
    const { } = useDashboardHelper(search, setSearch, setSearchResults, accessToken)

    return (
        <div>
            <form>
                <input type="text" placeholder="buscar cancion" onChange={e => setSearch(e.target.value)} />
                <button >buscar</button>
            </form>
            <div>
                {/* <Player accessToken={accessToken} trackUri={playingTrack?.uri} /> */}
            </div>
        </div>
    )
}

export default Search

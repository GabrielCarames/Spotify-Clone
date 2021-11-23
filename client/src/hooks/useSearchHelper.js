import { useEffect } from "react"
import SpotifyWebApi from "spotify-web-api-node"

export function useSearchHelper (search, setSearchResults, categories, setCategories, accessToken) {

    const spotifyApi = new SpotifyWebApi({
        clientId: "d2a7d543ee8141ee9e85e54c63fdd6e3",
    })

    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
        spotifyApi.searchTracks(search).then(res => {
            console.log("search", res)
        })

        spotifyApi.getCategories({
            limit : 40,
            offset: 0,
            country: 'AR',
            locale: 'ar_AR'
        })
        .then(function(data) {
          console.log("holasd", data.body);
          setCategories(data.body.categories)
        }, function(err) {
          console.log("Something went wrong!", err);
        });
        
    }, [search, accessToken])

    return {
        
    } 
}

export default useSearchHelper
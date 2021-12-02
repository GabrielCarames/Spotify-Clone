import { useEffect } from "react"
import { useHistory } from "react-router"
import SpotifyWebApi from "spotify-web-api-node"

export function useSearchHelper (search, setCategories) {
    const accessToken = JSON.parse(localStorage.getItem('userLogged')).accessToken
    const history = useHistory()

    const spotifyApi = new SpotifyWebApi({
        clientId: "d2a7d543ee8141ee9e85e54c63fdd6e3",
    })

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)

        spotifyApi.getCategories({
            limit : 40,
            offset: 0,
            country: 'AR',
            locale: 'ar_AR'
        }).then(function(data) {
            setCategories(data.body.categories)
        }, function(err) {
            console.log("Something went wrong!", err);
        });
        
        if(search) {
            const timer = setTimeout(async () => {
                history.push(`search/${search}`)
            }, 1000)
            return () => clearTimeout(timer);
        }
    }, [search, accessToken])
}

export default useSearchHelper
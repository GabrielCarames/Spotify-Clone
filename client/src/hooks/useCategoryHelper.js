import { useEffect } from "react";
import { useParams } from "react-router";
import SpotifyWebApi from "spotify-web-api-node";

export function useCategoryHelper(setPlaylists) {
    const accessToken = JSON.parse(localStorage.getItem('userLogged')).accessToken
    const { categoryName } = useParams()
    
    const spotifyApi = new SpotifyWebApi({
        clientId: "d2a7d543ee8141ee9e85e54c63fdd6e3",
    })
    
    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
        spotifyApi.getPlaylistsForCategory(categoryName, {
            country: 'AR',
            limit : 8,
            offset : 0
        }).then(function(data) {setPlaylists(data.body.playlists)}, function(err) {
          console.log("Something went wrong!", err);
        });
    }, [accessToken])
}

export default useCategoryHelper

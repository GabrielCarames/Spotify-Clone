import { useEffect, useState } from "react"
import SpotifyWebApi from "spotify-web-api-node"

export function useYourLibraryHelper () {
    const [likedSongs, setLikedSongs] = useState()
    const [playlists, setPlaylists] = useState()
    const accessToken = JSON.parse(localStorage.getItem('userLogged')).accessToken
    
    const spotifyApi = new SpotifyWebApi({
        clientId: "d2a7d543ee8141ee9e85e54c63fdd6e3",
    })

    useEffect(() => {
        if (!accessToken) return
        let authUserName
        spotifyApi.setAccessToken(accessToken)

        spotifyApi.getMe().then(function(data) {
            authUserName = data.body.display_name
        }, function(err) {
            console.log('Something went wrong!', err);
        });

        spotifyApi.getUserPlaylists(authUserName).then(function(data) {
            console.log('Retrieved playlists', data.body);
            setPlaylists(data.body.items)
        }, function(err) {
            console.log('Something went wrong!', err);
        });

        spotifyApi.getMySavedTracks({limit : 10,offset: 2}).then(function(data) {
            console.log("likedSongs", data);
            setLikedSongs(data.body)
        }, function(err) {
            console.log('Something went wrong!', err);
        });

    }, [accessToken])

    return { playlists, likedSongs }
}

export default useYourLibraryHelper
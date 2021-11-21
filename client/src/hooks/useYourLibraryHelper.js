import { useEffect, useState } from "react"
import SpotifyWebApi from "spotify-web-api-node"

export function useYourLibraryHelper (accessToken) {
    const [playlists, setPlaylists] = useState()
    const [likedSongs, setLikedSongs] = useState()

    const spotifyApi = new SpotifyWebApi({
        clientId: "d2a7d543ee8141ee9e85e54c63fdd6e3",
    })

    useEffect(() => {
        if (!accessToken) return
        let authUserName
        console.log("cosaa ameter tocen", accessToken)
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

        spotifyApi.getCategories({
            limit : 20,
            offset: 0,
            country: 'AR',
            locale: 'ar_AR'
        })
        .then(function(data) {
          console.log("holasd", data.body);
        }, function(err) {
          console.log("Something went wrong!", err);
        });

        spotifyApi.getFeaturedPlaylists({ limit : 10, offset: 6, country: 'AR', locale: 'ar_AR', timestamp:'2021-11-21T09:00:00' })
        .then(function(data) {
          console.log("car", data.body);
        }, function(err) {
          console.log("Something went wrong!", err);
        });

    }, [accessToken])

    return { playlists, likedSongs }
}

export default useYourLibraryHelper
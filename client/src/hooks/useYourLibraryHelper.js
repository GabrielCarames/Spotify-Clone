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

        spotifyApi.getMySavedTracks({
            limit : 10,
            offset: 2
        }).then(function(data) {
            console.log("data", data);
            setLikedSongs(data.body)
        }, function(err) {
            console.log('Something went wrong!', err);
        });

        spotifyApi.containsMySavedTracks([
            "spotify:track:4nmne9J3YCEdhvjTzwiAgu",
            "spotify:track:7DD1ojeTUwnW65g5QuZw7X",
            "spotify:track:1PnuVfURSyhhOI2NCXTLSF",
            "spotify:track:47wPvRG8FEwbZP22UBgTQr",
            "spotify:track:41pOIT2t1rvr2Trg1HQChZ",
            "spotify:track:72vzpLLJZgvG7TqKar57TX",
            "spotify:track:54eZmuggBFJbV7k248bTTt",
            "spotify:track:1a8JpAL3vbAdXYrEABvOtb",
            "spotify:track:500h8jAdr7LvzzXlm1qxtK",
            "spotify:track:2NjhV99ncY4A5lSkTHvTtU"
          ])
        .then(function(data) {

            // An array is returned, where the first element corresponds to the first track ID in the query
            var trackIsInYourMusic = data;

            if (trackIsInYourMusic) {
            console.log('Track was found in the users Your Music library', trackIsInYourMusic);
            } else {
            console.log('Track was not found.');
            }
        }, function(err) {
            console.log('Something went wrong!', err);
        });
        
    }, [accessToken])

    return { playlists, likedSongs }
}

export default useYourLibraryHelper
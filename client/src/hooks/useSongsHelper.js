import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import SpotifyWebApi from "spotify-web-api-node"

export function useSongsHelper (accessToken) {

    const [playlist, setPlaylist] = useState()

    const { playlistId } = useParams()

    const spotifyApi = new SpotifyWebApi({
        clientId: "d2a7d543ee8141ee9e85e54c63fdd6e3",
    })

    useEffect(() => {
        console.log("contentebnehoojk", playlistId, accessToken)
        spotifyApi.setAccessToken(accessToken)
        spotifyApi.getPlaylist(playlistId)
        .then(function(data) {
            console.log('Some information about this playlist', data.body);
            setPlaylist(data.body)
        }, function(err) {
            console.log('Something went wrong!', err);
        });
    }, [accessToken])

    useEffect(() => {
        window.onload = function () {
            console.log("hOLASODLAODALSDO", document.getElementsByClassName('songs-complementary'))
            const observer = new IntersectionObserver( 
                ([e]) => e.target.toggleAttribute('stuck', e.intersectionRatio < 1),
                {threshold: [1]}
              );
              
              observer.observe(document.getElementsByClassName('songs-complementary')[0]);
        }
        
    }, [])

    const millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    return { playlist, millisToMinutesAndSeconds }
}

export default useSongsHelper
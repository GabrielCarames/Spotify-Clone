import { useState } from "react";
import SpotifyWebApi from "spotify-web-api-node"

export function useSongsHelper (content) {

    const [playlist, setPlaylist] = useState()

    const spotifyApi = new SpotifyWebApi({
        clientId: "d2a7d543ee8141ee9e85e54c63fdd6e3",
    })

    spotifyApi.getPlaylist(content[1])
    .then(function(data) {
        console.log('Some information about this playlist', data.body);
    }, function(err) {
        console.log('Something went wrong!', err);
    });

    return {}
}

export default useSongsHelper
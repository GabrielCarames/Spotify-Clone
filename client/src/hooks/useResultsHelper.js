import { useEffect, useState } from "react"
import { useParams } from "react-router"
import SpotifyWebApi from "spotify-web-api-node"

export default function useResultsHelper() {
    const accessToken = JSON.parse(localStorage.getItem('userLogged')).accessToken
    const [sections, setSections] = useState([])
    const [topResult, setTopResult] = useState()
    const [results, setResults] = useState()
    const { search } = useParams()

    useEffect(() => {
        const spotifyApi = new SpotifyWebApi({
            clientId: "d2a7d543ee8141ee9e85e54c63fdd6e3",
        })
        spotifyApi.setAccessToken(accessToken)

        spotifyApi.searchTracks(search).then(res => {
            setResults(res.body.tracks)
        })

        spotifyApi.searchArtists(search).then(function(data) {
            const restringedArtists = data.body.artists.items.slice(0, 8)
            setSections(sections => sections.concat({artists: restringedArtists}))
        }, function(err) {
            console.error('Something went wrong!', err);
        });
        
        spotifyApi.searchPlaylists(search).then(function(data) {
            const restringedPlaylists = data.body.playlists.items.slice(0, 8)
            setSections(sections => sections.concat({playlists: restringedPlaylists}))
        }, function(err) {
            console.log('Something went wrong!', err);
        });
    }, [search])


    const millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    useEffect(() => {
        if(results) {
            const topPopularity = results.items.sort((a,b)=> a.popularity-b.popularity)[results.items.length-1]
            console.log("veragrande", topPopularity)
            setTopResult(topPopularity)
        }
    }, [results])

    return {results, millisToMinutesAndSeconds, topResult, sections}
}


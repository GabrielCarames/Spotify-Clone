import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import SpotifyWebApi from "spotify-web-api-node"

export function useSongsHelper(dispatch) {
  const accessToken = JSON.parse(localStorage.getItem('userLogged')).accessToken
  const [playlist, setPlaylist] = useState()
  const { playlistId } = useParams()
  const likedSongs = useSelector(state => state.likedSongsReducer)
  const spotifyApi = new SpotifyWebApi({ clientId: "d2a7d543ee8141ee9e85e54c63fdd6e3" })

  useEffect(() => {
    if (playlistId !== "likedsongs") {
      spotifyApi.setAccessToken(accessToken)
      spotifyApi.getPlaylist(playlistId).then(function (data) {
        setPlaylist(data.body)
      }, function (err) {
        console.log('Something went wrong!', err);
      });
    } else setPlaylist(likedSongs)
  }, [accessToken])

  useEffect(() => {
    window.onload = function () {
      const observer = new IntersectionObserver(
        ([e]) => e.target.toggleAttribute('stuck', e.intersectionRatio < 1),
        { threshold: [1] }
      );
      observer.observe(document.getElementsByClassName('songs-complementary')[0]);
    }
  }, [])

  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  const defineClassName = (isPlaying, uri, itemUri, className) => {
    if (isPlaying) {
      if (uri === itemUri) return className + "--active"
      else return className
    } else return className
  }

  const playSong = (songUri, songItemUri) => {
    if (songUri === songItemUri) {
      dispatch({ type: '@songState', payload: true })
    } else dispatch({ type: '@setSong', payload: songItemUri })
  }

  const stopSong = (songUri, songItemUri) => {
    if (songUri === songItemUri) {
      dispatch({ type: '@songState', payload: false })
    }
  }

  return { playlist, millisToMinutesAndSeconds, defineClassName, playSong, stopSong }
}

export default useSongsHelper
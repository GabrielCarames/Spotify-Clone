import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const LikedSongs = ({likedSongs}) => {
    const dispatch = useDispatch()

    return (
        likedSongs.map((likedSong, id) => {
            return (
                <div className="list__item" key={id} onClick={() => {dispatch({type: '@setLikedSongs', payload: likedSongs})}}>
                    <Link to={'/playlist/likedsongs'}> 
                        <span className="list__artist">{likedSong.track.artists[0].name}</span>
                        <span span className="list__name">&nbsp;{likedSong.track.name}</span>
                        <span className="list__circle"> • </span>
                    </Link>
                </div>
            )
        })
    )
}

export default LikedSongs

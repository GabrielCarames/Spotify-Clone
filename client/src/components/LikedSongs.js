import { Link } from "react-router-dom"

const LikedSongs = ({likedSongs}) => {
    return (
        likedSongs.map((likedSong, id) => {
            return (
                <div className="list__item" key={id}>
                    {/* <Link to={`/playlist/${playlist.id}`}>  */}
                    <span className="list__artist">{likedSong.track.artists[0].name}</span>
                    <span className="list__name">&nbsp;{likedSong.track.name}</span>
                    <span className="list__circle"> • </span>
                    {/* </Link> */}
                </div>
            )
        })
    )
}

export default LikedSongs

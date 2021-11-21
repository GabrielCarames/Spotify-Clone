const LikedSongs = ({likedSongs}) => {

    return (
        likedSongs.map((likedSong, id) => {
            return (
                <div className="list__item" key={id}>
                    <span className="list__artist">{likedSong.track.artists[0].name}</span>
                    <span span className="list__name">&nbsp;{likedSong.track.name}</span>
                    <span className="list__circle"> • </span>
                </div>
            )
        })
    )
}

export default LikedSongs

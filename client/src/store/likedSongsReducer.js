const likedSongs = {
    name: "Your liked songs",
    images: [
        {url: 'https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png'}
    ],
    owner: {
        display_name: "Caracas"
    },
    tracks: {
        total: 8,
        items: null
    },
    public: false,
    uri: null
}

const likedSongsReducer = (state = likedSongs, {type, payload}) => {
    let songCopy
    switch (type) {
        case '@setLikedSongs':
            songCopy = Object.assign({}, state)
            songCopy.tracks.items = payload
            songCopy.uri = payload.map((song) => song.track.uri)
            return songCopy
        default:
            return state
    }
}

export default likedSongsReducer
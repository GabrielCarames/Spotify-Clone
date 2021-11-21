const song = {
    uri: [null],
    isPlaying: false
}

const songReducer = (state = song, {type, payload}) => {
    let songCopy
    switch (type) {
        case '@setSong':
            songCopy = Object.assign({}, state)
            songCopy.uri[0] = payload
            return songCopy
        case '@songState':
            songCopy = Object.assign({}, state)
            songCopy.isPlaying = payload
            return songCopy
        default:
            return state
    }
}

export default songReducer
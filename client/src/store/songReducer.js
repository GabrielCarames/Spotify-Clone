

const song = {
    uri: null,
    isPlaying: false
}


const songReducer = (state = song, {type, payload}) => {
    console.log("SOESTADOREPODEROSODAAKSODASJIDSD´FJISDHFOSDIOFDJFIWHREO´FVPSDMFSDFSD", state)
    let songCopy
    switch (type) {
        case '@setSong':
            console.log("payloadnormal", payload)
        
            songCopy = Object.assign({}, state)
            songCopy.uri = payload
            return songCopy
        case '@songState':
            console.log("payloaddeelstatedo", payload)
            songCopy = Object.assign({}, state)
            songCopy.isPlaying = payload
            return songCopy
        default:
            return state
    }
}

export default songReducer
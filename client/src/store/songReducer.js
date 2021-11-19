

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
        
            songCopy = Object.assign({}, state) //CHE CAPO, FIJATE COMO HACER ESTO CORRECTAMENTE, PORQUE TIPO AGARRAN EL ESTADO DE ANTES DE NULL xD
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
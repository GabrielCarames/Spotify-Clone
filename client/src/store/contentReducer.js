const content = [null, null]

const contentReducer = (state = content, {type, payload}) => {
    switch (type) {
        case '@updateContent':
            console.log("payload", payload)
            const contentCopy = content.slice()
            contentCopy[0] = payload[0]
            contentCopy[1] = payload[1]
            return contentCopy
        default:
            return state
    }
}

export default contentReducer
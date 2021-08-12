export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}


export const  decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const islogged = () => {
    return {
        type: 'SIGN_IN'
    }
}

export const emailReducer = (payload) => {
    return {
        type: 'ADD_EMAIL',
        payload
    }
}
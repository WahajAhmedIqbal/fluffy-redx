export const emailReducer = (state = [] , action) => {
    switch (action.type) {
        case 'ADD_EMAIL':
            return [...state, action.payload]
    
        default:
            return state;
    }
}
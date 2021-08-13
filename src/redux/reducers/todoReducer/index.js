const initialState = [ 
    {
        id: 2,
        item: 'item333'
    },
    {
        id: 1,
        item: 'item1'
    }
]
export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload]
        case 'DELETE_ITEM':
            return state.filter((item) => item.id !== action.payload)
        default:
            return state;
    }
}
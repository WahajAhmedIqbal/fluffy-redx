import counterReducer from './counterReducer'
import isLogged from './isLogged'
import {emailReducer} from './emailReducer'

import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
        counterReducer,
        isLogged,
        emailReducer
})


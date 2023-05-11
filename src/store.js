import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/noteFilterReducer'

const reducer = combineReducers({
    notes: noteReducer,
    filter: filterReducer
})

const store = configureStore({
    reducer: reducer
}
)

export default store
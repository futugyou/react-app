import React from 'react'

const noteReducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_NOTE':
            return [...state, action.data]
        case 'TOGGLE_IMPORTTANCE':
            const id = action.data.id
            const noteToChange = state.find(n => n.id === id)
            const changeNote = {
                ...noteToChange,
                important: !noteToChange.important,
            }
            return state.map(note => note.id === id ? changeNote : note)
        default:
            return state
    }
}

export default noteReducer
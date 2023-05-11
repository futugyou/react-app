import noteService from '../services/notes'

const noteReducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_NOTE':
            return [...state, action.data]
        case 'INIT_NOTES':
            return action.data
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

// const generateId = () => Number((Math.random() * 1000000).toFixed(0))

export const createNote = (content) => {
    return async dispatch => {
        const data = {
            content,
            important: false,
        }
        const newNote = await noteService.create(data)
        dispatch({
            type: 'NEW_NOTE',
            data: newNote
        })
    }
}

export const toggleImportanceOf = (id) => {
    return {
        type: 'TOGGLE_IMPORTTANCE',
        data: { id }
    }
}

export const initializeNotes = () => {
    return async dispatch => {
        const notes = await noteService.getAll()
        dispatch({
            type: 'INIT_NOTES',
            data: notes,
        })
    }
}

export default noteReducer
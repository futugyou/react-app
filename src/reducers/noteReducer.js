const initialState = [
    {
        content: 'reducer defines how redux store works',
        important: true,
        id: 1,
    },
    {
        content: 'state of store can contain any data',
        important: false,
        id: 2,
    },
]

const noteReducer = (state = initialState, action) => {
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

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

export const createNote = (content) => {
    return {
        type: 'NEW_NOTE',
        data: {
            content,
            important: false,
            id: generateId()
        }
    }
}

export const toggleImportanceOf = (id) => {
    return {
        type: 'TOGGLE_IMPORTTANCE',
        data: { id }
    }
}
export default noteReducer
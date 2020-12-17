import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import noteReducer from './reducers/noteReducer'

const store = createStore(noteReducer)

store.dispatch({
    type: 'NEW_NOTE',
    data: {
        content: 'state change are mode with action one',
        important: true,
        id: 1
    }
})

store.dispatch({
    type: 'NEW_NOTE',
    data: {
        content: 'state change are mode with action two',
        important: false,
        id: 2
    }
})

const App = () => {
    return (
        <div>
            <ul>
                {store.getState().map(note =>
                    <li key={note.id}>
                        {note.content} <strong>{note.important ? 'important' : ''}</strong>
                    </li>
                )}
            </ul>
        </div>
    )
} 
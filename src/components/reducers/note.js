import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleImportanceOf } from '../../reducers/noteReducer'
import { useParams } from 'react-router-dom'

const Note = ({ note, handleClick }) => {
    return (
        <li key={note.id} onClick={handleClick}>
            {note.content}
            <strong>{note.important ? 'important' : ''}</strong>
        </li>
    )
}

const Notes = () => {
    const dispatch = useDispatch()
    const id = useParams().id
    const notes = useSelector(state => {
        if (state.filter === 'ALL') {
            return state.notes.filter(note => id === undefined || note.id === id)
        }
        return state.filter === 'IMPORTANT'
            ? state.notes.filter(note => note.important)
            : state.notes.filter(note => !note.important)
    })
    return (
        <ul>
            {notes.map(note =>
                <Note
                    key={note.id}
                    note={note}
                    handleClick={() => dispatch(toggleImportanceOf(note.id))}>
                </Note>
            )}
        </ul>
    )
}

export default Notes
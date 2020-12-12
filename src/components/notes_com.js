import React from 'react'
import Note from './note'

const NotesCom = (props) => {
    const { notes } = props
    return (
        <div>
            <h1>notes</h1>
            <ul>
                {
                    notes.map(note =>
                        <Note key={note.id} note={note} />
                    )
                }
            </ul>
        </div>
    )
}

export default NotesCom
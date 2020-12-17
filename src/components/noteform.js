import React, { useState } from 'react'

const NoteForm = ({ createNote }) => {
    const [newNote, setNewNote] = useState('a new note')

    const handleNoteChange = (event) => {
        setNewNote(event.target.value)
    }

    const addNote = (event) => {
        //事件处理立即调用 event.preventDefault() 方法，
        //它会阻止提交表单的默认操作。 因为默认操作会导致页面重新加载
        event.preventDefault()
        createNote({
            content: newNote,
            important: false,
        })
        setNewNote('')
    }

    return (
        <div>
            <h2>Create a new note</h2>
            <form onSubmit={addNote}>
                <input id="newnote" value={newNote} onChange={handleNoteChange}></input>
                <button type='submit'>save</button>
            </form>
        </div>
    )
}

export default NoteForm
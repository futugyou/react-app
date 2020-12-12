import React, { useState } from 'react'
import Note from './note'

const FormComp = (props) => {
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNote] = useState('a new note')
    const [showAll, setShowAll] = useState(true)
    const showNotes = showAll ? notes : notes.filter(note => note.important)
    const addNote = (event) => {
        //事件处理立即调用 event.preventDefault() 方法，
        //它会阻止提交表单的默认操作。 因为默认操作会导致页面重新加载
        event.preventDefault()
        const newobj = {
            id: notes.length + 1,
            context: newNote,
            date: new Date().toDateString(),
            important: newNote.length > 5
        }
        setNotes(notes.concat(newobj))
        console.log('button clicked', event.target)
        setNote('')
    }
    const handlerNoteChange = (event) => {
        console.log(event.target.value)
        setNote(event.target.value)
    }

    return (
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'importtant' : 'all'}
                </button>
            </div>
            <ul>
                {showNotes.map(note =>
                    <Note key={note.id} note={note}></Note>)}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handlerNoteChange}></input>
                <button type='submit'>save</button>
            </form>
        </div>
    )
}

export default FormComp
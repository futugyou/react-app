import React, { useEffect, useState } from 'react'
import Note from './note'
import axios from "axios";

const FormComp = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNote] = useState('a new note')
    const [showAll, setShowAll] = useState(true)

    const hook = () => {
        console.log('effect')
        axios
            .get('http://localhost:3001/notes')
            .then(response => {
                const notes = response.data
                console.log('promise fulfilled')
                //通常，对状态更新函数的调用会触发组件的重新渲染。
                setNotes(notes)
            })
    }
    //默认情况下，effects 在每次渲染完成后运行，但是你可以选择只在某些值发生变化时才调用。
    //useEffect的第二个参数用于指定effect运行的频率。
    //如果第二个参数是一个空数组 []，那么这个effect只在组件的第一次渲染时运行。
    useEffect(hook, [])
    console.log('count', notes.length, 'notes')

    const showNotes = showAll ? notes : notes.filter(note => note.important)
    const addNote = (event) => {
        //事件处理立即调用 event.preventDefault() 方法，
        //它会阻止提交表单的默认操作。 因为默认操作会导致页面重新加载
        event.preventDefault()
        const newobj = {
            id: notes.length + 1,
            content: newNote,
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
import React, { useEffect, useState } from 'react'
import Note from './note'
import Notification from './notification'
import Footer from './footer'
import noteService from "../services/notes";

const FormComp = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNote] = useState('a new note')
    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setErrorMessage] = useState('error')
    useEffect(() => setErrorMessage(null), [])
    const url = 'http://localhost:3001/notes'

    const hook = () => {
        console.log('effect')
        noteService
            .getAll()
            .then(response => {
                console.log('promise fulfilled')
                //通常，对状态更新函数的调用会触发组件的重新渲染。
                setNotes(response)
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
        noteService.create(newobj).then(response => {
            setNotes(notes.concat(response))
            setNote('')
        })
    }
    const handlerNoteChange = (event) => {
        console.log(event.target.value)
        setNote(event.target.value)
    }
    const toggleImportanceOf = (id) => {
        const note = notes.find(n => n.id === id)
        const changeNote = { ...note, important: !note.important }
        noteService
            .update(id, changeNote)
            .then(response => {
                setNotes(notes.map(note => note.id !== id ? note : response))
            })
            .catch(error => {
                setErrorMessage(`note ${note.content} was already delete`)
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000);
                setNotes(notes.filter(n => n.id !== id))
            })
    }
    return (
        <div>
            <h1>Notes</h1>
            <Notification message={errorMessage}></Notification>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'importtant' : 'all'}
                </button>
            </div>
            <ul>
                {showNotes.map(note =>
                    <Note
                        key={note.id}
                        note={note}
                        toggleImportance={() => toggleImportanceOf(note.id)}>
                    </Note>)}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handlerNoteChange}></input>
                <button type='submit'>save</button>
            </form>
            <Footer></Footer>
        </div>
    )
}

export default FormComp
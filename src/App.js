import React, { useEffect, useState, useRef } from 'react'
import Note from './components/note'
import Notification from './components/notification'
import Footer from './components/footer'
import noteService from './services/notes'
import loginService from './services/login'
import Togglable from './components/togglable'
import NoteForm from './components/noteform'
import LoginForm from './components/login'

const App = () => {
    const [notes, setNotes] = useState([])

    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

    const noteFormRef = useRef()
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

    useEffect(() => {
        const loggedUserJson = window.localStorage.getItem('loggedNoteappUser')
        if (loggedUserJson) {
            const user = JSON.parse(loggedUserJson)
            setUser(user)
            noteService.setToken(user.token)
        }
    }, [])
    const showNotes = showAll ? notes : notes.filter(note => note.important)

    const toggleImportanceOf = async (id) => {
        const note = notes.find(n => n.id === id)
        const changeNote = { ...note, important: !note.important }
        try {
            const response = await noteService.update(id, changeNote)
            setNotes(notes.map(note => note.id !== id ? note : response))
        } catch (_) {
            setErrorMessage(`note ${note.content} was already delete`)
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
            setNotes(notes.filter(n => n.id !== id))
        }
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({
                username, password
            })
            window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user))
            noteService.setToken(user.token)
            setUser(user)
            setUsername('')
            setPassword('')
        } catch (error) {
            setErrorMessage('wrong credentials')
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        }
    }

    const loginForm = () => {
        return (
            <Togglable buttonLable='login'>
                <LoginForm
                    username={username}
                    password={password}
                    handleUsernameChange={({ target }) => setUsername(target.value)}
                    handlePasswordChange={({ target }) => setPassword(target.value)}
                    handleSubmit={handleLogin}
                />
            </Togglable>
        )
    }

    const addNote = async (noteObject) => {
        noteFormRef.current.togglableVisibility()
        const returnNote = await noteService.create(noteObject)
        setNotes(notes.concat(returnNote))
    }

    const noteForm = () => {
        return (
            <Togglable buttonLable='new note' ref={noteFormRef}>
                <NoteForm createNote={addNote} />
            </Togglable>
        )
    }

    return (
        <div>
            <h1>Notes</h1>
            <Notification message={errorMessage}></Notification>
            {user === null ?
                loginForm() :
                <div>
                    <p>{user.name} logged-in</p>
                    {noteForm()}
                </div>
            }

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

            <Footer></Footer>
        </div>
    )
}

export default App
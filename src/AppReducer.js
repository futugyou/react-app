import React, { useEffect } from 'react'
import NewNote from './components/reducers/newnote'
import Notes from './components/reducers/note'
import Users from './components/user'
import VisibleFilter from './components/reducers/filter'
import { initializeNotes } from './reducers/noteReducer'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeNotes())
    }, [dispatch])
    const padding = { padding: 5 }
    return (
        <div className="container">
            <Router >
                <div>
                    <Link style={padding} to="/newnotes">home</Link>
                    <Link style={padding} to="/notes">notes</Link>
                    <Link style={padding} to="/users">users</Link>
                </div>
                <Routes>
                    <Route path="/newnotes" element={<NewNote />} >
                    </Route>
                    <Route path="/users" element={<Users />} >
                    </Route>
                    <Route path="/notes/:id" element={<><VisibleFilter /> <Notes /></>} >
                    </Route>
                    <Route path="/notes" element={<><VisibleFilter /> <Notes /></>} >

                    </Route>
                </Routes>
                <div>
                    <i>Note app</i>
                </div>
            </Router>
        </div>
    )

    // return (
    //     <div>
    //         <NewNote></NewNote>
    //         <VisibleFilter></VisibleFilter>
    //         <Notes></Notes>
    //     </div>
    // )
}

export default App
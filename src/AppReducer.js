import React, { useEffect } from 'react'
import NewNote from './components/reducers/newnote'
import Notes from './components/reducers/note'
import VisibleFilter from './components/reducers/filter'
import { initializeNotes } from './reducers/noteReducer'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeNotes())
    }, [dispatch])
    const padding = { padding: 5 }
    return (
        <Router>
            <div>
                <Link style={padding} to="/newnotes">home</Link>
                <Link style={padding} to="/notes">notes</Link>
                <Link style={padding} to="/users">users</Link>
            </div>
            <Switch>
                <Route path="/newnotes">
                    <NewNote></NewNote>
                </Route>
                {/* <Route path="/users">
                    <Users />
                </Route> */}
                <Route path="/notes/:id">
                    <VisibleFilter></VisibleFilter>
                    <Notes  />
                </Route>
                <Route path="/notes">
                    <VisibleFilter></VisibleFilter>
                    <Notes></Notes>
                </Route>
            </Switch>

            <div>
                <i>Note app</i>
            </div>
        </Router>
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
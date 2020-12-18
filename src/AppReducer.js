import React, { useEffect } from 'react'
import NewNote from './components/reducers/newnote'
import Notes from './components/reducers/note'
import VisibleFilter from './components/reducers/filter'
import { initializeNotes } from './reducers/noteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeNotes())
    }, [dispatch])
    return (
        <div>
            <NewNote></NewNote>
            <VisibleFilter></VisibleFilter>
            <Notes></Notes>
        </div>
    )
}

export default App
import React from 'react'
import NewNote from './components/reducers/newnote'
import Notes from './components/reducers/note'

const App = () => {
    return (
        <div>
            <NewNote></NewNote>
            <Notes></Notes>
        </div>
    )
}

export default App
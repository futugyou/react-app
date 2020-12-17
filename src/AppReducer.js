import React from 'react'
import NewNote from './components/reducers/newnote'
import Notes from './components/reducers/note'
import VisibleFilter from './components/reducers/filter'
const App = () => {
    return (
        <div>
            <NewNote></NewNote>
            <VisibleFilter></VisibleFilter>
            <Notes></Notes>
        </div>
    )
}

export default App
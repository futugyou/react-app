import React from 'react'
import Node from './node'

const NotesCom = (props) => {
    const { notes } = props
    return (
        <div>
            <h1>notes</h1>
            <ul>
                {
                    notes.map(node =>
                        <Node key={node.id} node={node} />
                    )
                }
            </ul>
        </div>
    )
}

export default NotesCom
import React from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../../reducers/noteReducer'
import { Table, Form, Button } from 'react-bootstrap'

const NewNote = () => {
    const dispatch = useDispatch()
    const addNote = async (event) => {
        event.preventDefault()
        const content = event.target.note.value
        event.target.note.value = ''
        dispatch(createNote(content))
    }
    return (
        <Form onSubmit={addNote}>
            <Form.Group>
            <Form.Control type="text" name="note" />
            <Button variant="primary" type="submit">add</Button >
            </Form.Group>
        </Form >
    )
}

export default NewNote
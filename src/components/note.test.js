import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Note from './note'

test('reners content', () => {
    const note = {
        content: 'this is test content',
        important: true
    }
    const component = render(
        <Note note={note}></Note>
    )
    component.debug()
    expect(component.container).toHaveTextContent(
        'this is test content'
    )

    const element = component.getByText(
        'this is test content'
    )
    expect(element).toBeDefined()

    const div = component.container.querySelector('.note')
    expect(div).toHaveTextContent('this is test content')

    const li = component.container.querySelector('li')
    console.log(prettyDOM(li))
})

test('click the button calls event hander once', () => {
    const note = {
        content: 'this is test content',
        important: true
    }
    const mockHandler = jest.fn()
    const component = render(
        <Note note={note} toggleImportance={mockHandler}></Note>
    )
    const button = component.getByText('make not important')
    fireEvent.click(button)
    expect(mockHandler.mock.calls).toHaveLength(1)
})
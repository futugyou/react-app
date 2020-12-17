import noteReducer from './noteReducer'
import deepFreeze from 'deep-freeze'

describe('noteReducer', () => {
    test('returns new state with action NEW_NOTE', () => {
        const state = []
        const action = {
            type: 'NEW_NOTE',
            data: {
                content: 'state change are mode with action one',
                important: true,
                id: 1
            }
        }
        deepFreeze(state)
        const newState = noteReducer(state, action)

        expect(newState).toHaveLength(1)
        expect(newState).toContainEqual(action.data)
    })

    test('returns new state with action TOGGLE_IMPORTTANCE', () => {
        const state = [{
            content: 'state change are mode with action one',
            important: true,
            id: 1
        },
        {
            content: 'state change are mode with action two',
            important: false,
            id: 2
        }]
        const action = {
            type: 'TOGGLE_IMPORTTANCE',
            data: {
                id: 2
            }
        }
        deepFreeze(state)
        const newState = noteReducer(state, action)
        expect(newState).toHaveLength(2)
        expect(newState).toContainEqual(state[0])

        expect(newState).toContainEqual({
            content: 'state change are mode with action two',
            important: true,
            id: 2
        })

    })
})
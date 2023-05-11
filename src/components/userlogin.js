import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { LOGIN } from './userqueries'

const LoginForm = ({ setError, setToken }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [login, result] = useMutation(LOGIN, {
        onError: (error) => {
            setError(error.graphQLErrors[0].message)
        }
    })

    useEffect(() => {
        if (result.data && result.data.login) {
            const token = result.data.login.value
            setToken(token)
            localStorage.setItem('phonenumbers-user-token', token)
        }
    }, [result.data, setToken])

    const submit = async (event) => {
        event.preventDefault()
        login({ variables: { username, password } })
    }
    return (
        <div>
            <form onSubmit={submit}>
                <div>username<input value={username} onChange={({ target }) => setUsername(target.value)}></input></div>
                <div>password<input value={password} onChange={({ target }) => setPassword(target.value)}></input></div>
                <button type="submit">login</button>
            </form>
        </div>
    )
}

export default LoginForm
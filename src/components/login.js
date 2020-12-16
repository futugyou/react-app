import React, { useState } from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({ userLogin }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        const user = userLogin({
            username, password
        })
        if (user) {
            setUsername('')
            setPassword('')
        }
    }

    const handleUsernameChange = ({ target }) => {
        setUsername(target.value)
    }

    const HandlePasswordChange = ({ target }) => {
        setPassword(target.value)
    }

    return (
        <div>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    username:<input id="username" type="text" value={username} onChange={handleUsernameChange}></input>
                </div>
                <div>
                    password:<input id="password" type="password" value={password} onChange={HandlePasswordChange}></input>
                </div>
                <button id="login-button" type="submit">login</button>
            </form>
        </div>
    )
}

LoginForm.propTypes = {
    userLogin: PropTypes.func.isRequired,
}

export default LoginForm
import React from 'react'
import PropTypes from 'prop-types'

//状态以及所有相关的函数都在组件外进行定义，并作为属性传递给组件
const LoginForm = ({
    handleSubmit,
    handleUsernameChange,
    HandlePasswordChange,
    username,
    password
}) => {
    return (
        <div>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    username:<input type="text" value={username} onChange={handleUsernameChange}></input>
                </div>
                <div>
                    password:<input type="password" value={password} onChange={HandlePasswordChange}></input>
                </div>
                <button type="submit">login</button>
            </form>
        </div>
    )
}

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleUsernameChange: PropTypes.func.isRequired,
    HandlePasswordChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
}

export default LoginForm
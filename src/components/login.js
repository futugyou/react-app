import React from 'react'

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

export default LoginForm
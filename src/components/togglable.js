import React, { useState } from 'react'
const Togglable = (props) => {
    const [visible, setVisible] = useState(false)
    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }
    const togglableVisibility = () => {
        console.log(visible);
        setVisible(!visible)
    }
    return (
        <div>
            <div style={hideWhenVisible}>
                <button onClick={togglableVisibility}>{props.buttonLable}</button>
            </div>
            <div style={showWhenVisible}>
                {props.children}
                <button onClick={togglableVisibility}>cancel</button>
            </div>
        </div>
    )
}

export default Togglable
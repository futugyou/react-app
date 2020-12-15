import React, { useState, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'

const Togglable = React.forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false)
    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    const togglableVisibility = () => {
        setVisible(!visible)
    }

    useImperativeHandle(ref, () => {
        return togglableVisibility
    })

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
})

Togglable.displayName = 'Togglable'

Togglable.propTypes = {
    buttonLable: PropTypes.string.isRequired
}

export default Togglable
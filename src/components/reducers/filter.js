import React from 'react'
import { filterChange } from '../../reducers/noteFilterReducer'
import { useDispatch } from 'react-redux'

const VisibleFilter = (props) => {
    const dispatch = useDispatch()

    return (
        <div>
            all
            <input
                type="radio"
                name="filter"
                onChange={() => dispatch(filterChange('ALL'))}
            />
        important
            <input
                type="radio"
                name="filter"
                onChange={() => dispatch(filterChange('IMPORTANT'))}
            />
        nonimportant
            <input
                type="radio"
                name="filter"
                onChange={() => dispatch(filterChange('NONIMPORTANT'))}
            />
        </div>
    )
}

export default VisibleFilter
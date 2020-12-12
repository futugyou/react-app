import React from 'react'

const Hello = (p) => {
    const name = p.name
    const age = p.age
    const bornYear = () => new Date().getFullYear() - age

    return (
        <div>
            <p>Hello {p.name} age {p.age} like {p.like}</p>
            <p>{p.obj} sum is {p.sum}</p>
            <p>so you were probdbly born in {bornYear()}</p>

        </div>
    )
}

export default Hello
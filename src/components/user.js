import React from 'react'
import { gql, useQuery } from '@apollo/client'

const ALL_PERSONS = gql`
query{
    allPersons{
        name
        phone
        id
    }
}`

const Users = () => {
    const result = useQuery(ALL_PERSONS)
    if (result.loading) {
        return <div>loading...</div>
    }
    return (
        <div>
            <h2>users</h2>
            {result.data.allPersons.map(p =>
                <div key={p.name}>
                    {p.name} {p.phone}
                </div>)}
        </div>
    )
}

export default Users
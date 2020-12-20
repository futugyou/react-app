import React, { useEffect, useState } from 'react'
import { gql, useQuery, useLazyQuery } from '@apollo/client'
import PersonForm from './usercreate'

const ALL_PERSONS = gql`
query{
    allPersons{
        name
        phone
        id
    }
}`

const FIND_PERSON = gql`
query findPersonByName($nameToSearch:String!){
    findPerson(name:$nameToSearch){
        name
        phone
        id
        address{
            street
            city
        }
    }
}`

const Users = () => {
    const result = useQuery(ALL_PERSONS, {
        pollInterval: 2000
    })
    const [getPerson, lazyresult] = useLazyQuery(FIND_PERSON)
    const [person, setPerson] = useState(null)

    useEffect(() => {
        if (lazyresult.data) {
            setPerson(lazyresult.data.findPerson)
        }
    }, [lazyresult.data])

    if (result.loading) {
        return <div>loading...</div>
    }

    const showPerson = (name) => {
        getPerson({ variables: { nameToSearch: name } })
    }



    if (person) {
        return (
            <div>
                <h2>{person.name}</h2>
                <h2>{person.address.street} {person.address.city}</h2>
                <h2>{person.phone}</h2>
                <button onClick={() => setPerson(null)}>close</button>
            </div>
        )
    }
    return (
        <div>
            <PersonForm></PersonForm>
            <h2>users</h2>
            {result.data.allPersons.map(p =>
                <div key={p.name}>
                    {p.name} {p.phone}
                    <button onClick={() => showPerson(p.name)}>show address</button>
                </div>)}
        </div>
    )
}

export default Users
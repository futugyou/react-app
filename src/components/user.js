import React, { useEffect, useState } from 'react'
import { useQuery, useLazyQuery, useApolloClient, useSubscription } from '@apollo/client'
import PersonForm from './usercreate'
import { ALL_PERSONS, FIND_PERSON, PERSON_ADDED } from './userqueries'
import Notification from './notification'
import PhoneFrom from './userphoneedit'
import LoginForm from './userlogin'

const Users = () => {
    const updateCacheWith = (addedPerson) => {
        const includedIn = (set, object) => set.map(p => p.id).includes(object.id)
        const dataInstore = client.readQuery({ query: ALL_PERSONS })
        if (!includedIn(dataInstore.allPersons, addedPerson)) {
            client.writeQuery({
                query: ALL_PERSONS,
                data: { allPersons: dataInstore.allPersons.concat(addedPerson) }
            })
        }
    }

    useSubscription(PERSON_ADDED, {
        onData: ({ subscriptionData }) => {
            const addedPerson = subscriptionData.data.personAdded
            notify(`${addedPerson.name} added`)
            updateCacheWith(addedPerson)
        }
    })
    const [token, setToken] = useState(null)
    const result = useQuery(ALL_PERSONS, {
        pollInterval: 2000
    })
    const [getPerson, lazyresult] = useLazyQuery(FIND_PERSON)
    const [person, setPerson] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const client = useApolloClient()
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
    const notify = (message) => {
        setErrorMessage(message)
        setTimeout(() => {
            setErrorMessage(null)
        }, 10000)
    }
    const logout = () => {
        setToken(null)
        localStorage.clear()
        client.resetStore()
    }


    if (!token) {
        return (
            <div>
                <Notification message={errorMessage}></Notification>
                <h2>login</h2>
                <LoginForm setToken={setToken} setError={notify}></LoginForm>
                <PersonForm setError={notify} updateCacheWith={updateCacheWith}></PersonForm>
            </div>
        )
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
            {token ? <button onClick={() => logout()}>logout</button> : <div></div>}
            <Notification message={errorMessage}></Notification>
            <PersonForm setError={notify} updateCacheWith={updateCacheWith}></PersonForm>
            <h2>users</h2>
            {result.data.allPersons.map(p =>
                <div key={p.name}>
                    {p.name} {p.phone}
                    <button onClick={() => showPerson(p.name)}>show address</button>
                </div>)}
            <PhoneFrom setError={notify}></PhoneFrom>
        </div>
    )
}

export default Users
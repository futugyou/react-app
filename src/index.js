// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'
// import './index.css'

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './AppReducer'
import store from './store'

import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'http://localhost:4000',
    })
})

const query = gql`
query {
  allPersons  {
    name,
    phone,
    address {
      street,
      city
    }
    id
  }
}
`

// client.query({ query })
//     .then((response) => {
//         console.log(response.data)
//     })

ReactDOM.render(
    <div>
        <ApolloProvider client={client}>
            <Provider store={store}>
                <App />
            </Provider>
        </ApolloProvider>
    </div>
    ,
    document.getElementById('root')
)
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

import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from 'apollo-link-context'

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('phonenumbers-user-token')
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : null,
    }
  }
})

const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
})
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
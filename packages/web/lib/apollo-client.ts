import fetch from 'cross-fetch'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.NEXT_PUBLIC_GQL_HOST, fetch }),
  uri: process.env.NEXT_PUBLIC_GQL_HOST,
  cache: new InMemoryCache(),
})

export default client

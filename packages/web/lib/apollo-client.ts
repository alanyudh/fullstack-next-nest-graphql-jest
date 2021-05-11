import fetch from 'cross-fetch'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const uri =
  !process.env.NEXT_PUBLIC_GQL_HOST || process.env.NEXT_PUBLIC_GQL_HOST === ''
    ? 'http://localhost:4000/graphql'
    : process.env.NEXT_PUBLIC_GQL_HOST

const client = new ApolloClient({
  link: new HttpLink({ uri, fetch }),
  uri,
  cache: new InMemoryCache(),
})

export default client

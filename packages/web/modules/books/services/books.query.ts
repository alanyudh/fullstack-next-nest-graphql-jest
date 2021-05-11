import { gql } from '@apollo/client'

const GET_BOOK = gql`
  query Book($id: String!) {
    book(bookId: $id) {
      id
      title
      description
      year
    }
  }
`

const GET_BOOKS = gql`
  query Books {
    books {
      id
      title
      description
    }
  }
`
export { GET_BOOK, GET_BOOKS }

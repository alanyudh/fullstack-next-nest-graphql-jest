import client from '../../../lib/apollo-client'
import { GET_BOOKS, GET_BOOK } from './books.query'
import { ApolloQueryResult } from '@apollo/client'
import { IGetBookArgs } from '@books/common'

export class BooksService {
  async findAll(): Promise<ApolloQueryResult<any>> {
    return client.query({
      query: GET_BOOKS,
    })
  }

  async findOne(getBookArgs: IGetBookArgs): Promise<ApolloQueryResult<any>> {
    return client.query({
      query: GET_BOOK,
      variables: { id: getBookArgs.bookId },
    })
  }
}

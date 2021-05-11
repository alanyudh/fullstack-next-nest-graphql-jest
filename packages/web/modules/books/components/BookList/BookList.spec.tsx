import { Book } from '../../models/book.model'
import { render } from '../../../../test/testUtils'
import { BookListProps } from './BookList.props'
import BookList from './BookList'

describe('BookList', () => {
  let expectedProps: BookListProps

  beforeEach(() => {
    expectedProps = {
      books: [
        new Book('1', 'title1', 'description1', 2001),
        new Book('2', 'title2', 'description2', 2002),
        new Book('3', 'title3', 'description3', 2003),
        new Book('4', 'title4', 'description4', 2004),
      ],
    }
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<BookList {...expectedProps} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render array of books', () => {
    const { getAllByTestId } = render(<BookList {...expectedProps} />)
    const bookPreviews = getAllByTestId('book-list-item')

    expect(bookPreviews).toHaveLength(expectedProps.books.length)
  })

  it('should render empty information when there is no books', () => {
    expectedProps.books = []

    const { getByTestId } = render(<BookList {...expectedProps} />)
    const emptyBox = getByTestId('book-list-empty')

    expect(emptyBox).toBeVisible()
  })
})

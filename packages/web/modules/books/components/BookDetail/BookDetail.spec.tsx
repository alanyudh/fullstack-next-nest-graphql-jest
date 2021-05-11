import { Book } from '../../models/book.model'
import BookDetail from './BookDetail'
import { BookDetailProps } from './BookDetail.props'
import { render } from '../../../../test/testUtils'

describe('BookDetail', () => {
  let expectedProps: BookDetailProps

  beforeEach(() => {
    expectedProps = {
      book: new Book('1', 'title', 'description', 2009),
    }
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<BookDetail {...expectedProps} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render title, description, year', () => {
    const { getByText } = render(<BookDetail {...expectedProps} />)
    const title = getByText(expectedProps.book?.title)
    const description = getByText(expectedProps.book?.description)
    const year = getByText(/2009/)

    expect(title).toBeVisible()
    expect(description).toBeVisible()
    expect(year).toBeVisible()
  })

  it('should render empty information when there is no props', () => {
    expectedProps.book = null

    const { getByTestId } = render(<BookDetail {...expectedProps} />)
    const emptyBox = getByTestId('book-detail-empty')

    expect(emptyBox).toBeVisible()
  })
})

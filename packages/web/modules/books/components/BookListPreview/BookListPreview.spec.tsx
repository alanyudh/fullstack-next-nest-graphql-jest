import { Book } from '../../models/book.model'
import { render } from '../../../../test/testUtils'
import { BookListPreviewProps } from './BookListPreview.props'
import BookListPreview from './BookListPreview'

describe('BookListPreview', () => {
  let expectedProps: BookListPreviewProps

  beforeEach(() => {
    expectedProps = {
      book: new Book('1', 'title1', 'description1', 2001),
    }
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<BookListPreview {...expectedProps} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should display title & short', () => {
    const { getByText } = render(<BookListPreview {...expectedProps} />)
    const book = expectedProps.book

    const title = getByText(book?.title)
    const description = getByText(book?.shortDescription)

    expect(title).toBeVisible()
    expect(description).toBeVisible()
  })

  it('should have anchor to book detail', () => {
    const { getByTestId } = render(<BookListPreview {...expectedProps} />)
    const achor = getByTestId('book-list-anchor')

    expect(achor.closest('a').href).toContain(`/books/${expectedProps.book.id}`)
  })
})

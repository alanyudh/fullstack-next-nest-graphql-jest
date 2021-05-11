import { render } from '../../testUtils'
import Page from '../../../pages/books/[id]'
import { Book } from '../../../modules/books/models/book.model'

describe('Book detail page', () => {
  it('matches snapshot', () => {
    const props = {
      book: new Book('1', 'title1', 'description1', 2001),
    }

    const { asFragment } = render(<Page />, props)
    expect(asFragment()).toMatchSnapshot()
  })
})

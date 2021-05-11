import { Card } from 'antd'
import { BookListPreviewProps } from './BookListPreview.props'

const BookListPreview: React.FC<BookListPreviewProps> = ({
  book,
}: BookListPreviewProps) => {
  return (
    <>
      <a data-testid="book-list-anchor" href={`/books/${book.id}`}>
        <Card title={book.title}>{book.shortDescription}</Card>
      </a>
    </>
  )
}

export default BookListPreview

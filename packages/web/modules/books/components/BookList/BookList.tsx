import { List, Empty } from 'antd'
import BookListPreview from '../BookListPreview/BookListPreview'
import { BookListProps } from './BookList.props'

const BookList: React.FC<BookListProps> = ({ books }: BookListProps) => {
  if (!books || books.length < 1) return <Empty data-testid="book-list-empty" />

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }}
      dataSource={books}
      renderItem={(item) => (
        <List.Item data-testid="book-list-item">
          <BookListPreview book={item} />
        </List.Item>
      )}
    />
  )
}

export default BookList

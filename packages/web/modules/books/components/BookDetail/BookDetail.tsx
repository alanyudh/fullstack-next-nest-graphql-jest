import { Typography, Divider, Empty } from 'antd'
import { BookDetailProps } from './BookDetail.props'

const { Title, Paragraph, Text, Link } = Typography

const BookDetail: React.FC<BookDetailProps> = ({ book }: BookDetailProps) => {
  if (!book) return <Empty data-testid="book-detail-empty" />

  return (
    <Typography>
      <Title data-testid="book-detail-title">{book.title}</Title>
      <Paragraph data-testid="book-detail-desc">{book.description}</Paragraph>

      <Paragraph>
        <Text type="secondary" data-testid="book-detail-year">
          Published on {book.year}
        </Text>
      </Paragraph>

      <Divider />

      <Link href="/">back</Link>
    </Typography>
  )
}

export default BookDetail

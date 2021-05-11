import { Row, Col } from 'antd'
import { NextPage, InferGetServerSidePropsType, GetServerSideProps } from 'next'
import BookDetail from '../../modules/books/components/BookDetail/BookDetail'
import { NextSeo } from 'next-seo'
import { BooksService } from '../../modules/books/services/books.service'
import { Book } from '../../modules/books/models/book.model'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params
  if (!params) throw 'no params'

  if (Array.isArray(params.id))
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }

  const booksService = new BooksService()
  const { data } = await booksService.findOne({ bookId: params.id })

  // Pass post data to the page via props
  return {
    props: {
      book: data.book,
    },
  }
}

const Page: NextPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const book = new Book(
    props.book?.id,
    props.book?.title,
    props.book?.description,
    props.book?.year
  )

  return (
    <>
      <NextSeo
        title={book?.title}
        description={book?.description ?? 'View more on this web'}
      />

      <Row style={{ marginTop: 32, textAlign: 'center' }}>
        {/* GALLERY */}
        <Col span={24}>
          <BookDetail book={book} />
        </Col>
      </Row>
    </>
  )
}

export default Page

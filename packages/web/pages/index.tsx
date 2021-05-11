import { Row, Col } from 'antd'
import BookList from '../modules/books/components/BookList/BookList'
import { NextPage, InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'
import { BooksService } from '../modules/books/services/books.service'
import { Book } from '../modules/books/models/book.model'

export const getServerSideProps: GetServerSideProps = async () => {
  const booksService = new BooksService()
  const { data } = await booksService.findAll()

  // Pass post data to the page via props
  return {
    props: {
      books: data.books ?? [],
    },
  }
}

const Page: NextPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const books: Book[] = props.books?.map((book) => {
    return new Book(book.id, book.title, book.description, book.year)
  })

  return (
    <>
      <NextSeo
        title="Full stack books gallery"
        description="View more on this web"
      />

      <Row style={{ marginTop: 32, textAlign: 'center' }}>
        {/* MAIN TEXT */}
        <Col span={24}>
          <h1>Full stack book gallery example</h1>
          <p>View code on Github</p>
        </Col>
        {/* GALLERY */}
        <Col span={24} style={{ marginTop: 32 }}>
          <BookList books={books} />
        </Col>
      </Row>
    </>
  )
}

export default Page

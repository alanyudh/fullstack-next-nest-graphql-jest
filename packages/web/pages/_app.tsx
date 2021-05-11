import BaseLayout from '../modules/layout/BaseLayout'
import { NextPage } from 'next'

const App: NextPage<{
  Component: any
  pageProps: any
  err: any
}> = ({ Component, pageProps, err }) => {
  return (
    <>
      <BaseLayout>
        <Component {...pageProps} err={err} />
      </BaseLayout>
    </>
  )
}

export default App

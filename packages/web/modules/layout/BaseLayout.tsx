import { Layout } from 'antd'
const { Header, Footer, Content } = Layout

const BaseLayout: React.FC = ({ children }) => (
  <>
    <Layout>
      <Header>Header</Header>
      <Content style={{ padding: '0 50px' }}>{children}</Content>
      <Footer style={{ textAlign: 'center' }}>
        ©2021 Created by <a href="https://github.com/alanyudh">Alan Yudha</a>
      </Footer>
    </Layout>
  </>
)

export default BaseLayout

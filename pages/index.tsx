import { Layout } from '../components/Layout'
import { Header } from '../components/Header'
import { Nav } from "../components/Nav";

export default () => (
  <>
    <Nav />
    <Header />
    <Layout>
      <h1>Hello world</h1>
    </Layout>
  </>
)

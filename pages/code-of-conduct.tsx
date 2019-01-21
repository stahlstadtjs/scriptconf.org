import { H1 } from '../components/DocHeadline';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { Nav } from '../components/Nav';
import { Wrapper } from '../components/Wrapper';
import CoC from '../content/code-of-conduct.mdx';

export default () => {
  return <>
    <Nav />
    <Header>
      <H1>Code of Conduct</H1>
    </Header>
    <Layout>
      <Wrapper>
        <CoC />
      </Wrapper>
      <Footer />
    </Layout>
  </>
}

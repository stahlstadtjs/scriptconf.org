import { H1 } from '../components/DocHeadline';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { Nav } from '../components/Nav';
import { Wrapper } from '../components/Wrapper';
import Legal from '../content/legal.mdx';

export default () => {
  return <>
    <Nav />
    <Header>
      <H1>Legal Notice</H1>
    </Header>
    <Layout>
      <Wrapper>
        <Legal />
      </Wrapper>
      <Footer />
    </Layout>
  </>
}

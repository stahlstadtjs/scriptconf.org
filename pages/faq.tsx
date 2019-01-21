import { H1 } from '../components/DocHeadline';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { Nav } from '../components/Nav';
import { Wrapper } from '../components/Wrapper';
import FAQ from '../content/faq.mdx';

export default () => {
  return <>
    <Nav />
    <Header>
      <H1>Frequently Asked Questions</H1>
    </Header>
    <Layout>
      <Wrapper>
        <FAQ />
      </Wrapper>
      <Footer />
    </Layout>
  </>
}

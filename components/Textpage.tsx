import { FC } from 'react';
import { H1 } from '../components/DocHeadline';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { Nav } from '../components/Nav';
import { Wrapper } from '../components/Wrapper';

export const Textpage:FC<{ title: string }> = ({ title, children }) => {
  return <>
    <Nav />
    <Header>
      <H1>{ title }</H1>
    </Header>
    <Layout>
      <Wrapper>
        { children }
      </Wrapper>
      <Footer />
    </Layout>
  </>
}

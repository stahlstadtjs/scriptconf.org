import { FC } from 'react';
import { Footer } from './Footer';
import { H1 } from './DocHeadline';
import { Header } from './Header';
import { Layout } from './Layout';
import { Nav } from './Nav';
import React from 'react'
import { Wrapper } from './Wrapper';

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
    </Layout>
    <Footer />
  </>
}

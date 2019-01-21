import { Component } from 'react';
import { H1 } from '../components/DocHeadline';
import { Footer } from '../components/Footer';
import { HeaderWithLogo } from '../components/Header';
import { Layout } from '../components/Layout';
import { Nav } from '../components/Nav';
import { Tito } from '../components/Tito';
import { Wrapper } from '../components/Wrapper';
import Ecommerce from '../content/ecommerce.mdx';
import WorkshopsInclude from '../content/workshopsinclude.mdx';

export default class extends Component {

  componentDidMount() {
    if(typeof window !== 'undefined') {
      (window as any).TitoWidget.buildWidgets()
    }
  }

  render() {
    return <>
      <Nav />
      <HeaderWithLogo>
        <div className="button-line">
          <p>April 1, 2019 • Vienna • Location tba</p>
          <H1>Vitaly Friedman in Vienna</H1>
        </div>
      </HeaderWithLogo>
      <Layout>
        <Wrapper>
          <Ecommerce />
          <WorkshopsInclude />
        </Wrapper>
        <Tito />
        <Footer />
      </Layout>
    </>
  }
}
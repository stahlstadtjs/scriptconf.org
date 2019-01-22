import { Component } from 'react';
import { H1 } from '../components/DocHeadline';
import { Footer } from '../components/Footer';
import { HeaderWithLogo } from '../components/Header';
import { Layout } from '../components/Layout';
import { Nav } from '../components/Nav';
import { Tito } from '../components/Tito';
import { Wrapper } from '../components/Wrapper';
import DesignPatterns from '../content/design-patterns.mdx';
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
        <div className="margin">
          <p>April 2, 2019 • Linz • Domhotel</p>
          <H1>Vitaly Friedman in Linz</H1>
        </div>
      </HeaderWithLogo>
      <Layout>
        <Wrapper>
          <DesignPatterns />
          <WorkshopsInclude />
        </Wrapper>
        <Tito event="scriptconf/vitaly-linz-2019" />
        <Footer />
      </Layout>
    </>
  }
}

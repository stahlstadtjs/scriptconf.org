import { Component } from 'react';
import { H1 } from '../../components/workshop-site/DocHeadline';
import { Footer } from '../../components/workshop-site/Footer';
import { HeaderWithLogo } from '../../components/workshop-site/Header';
import { Layout } from '../../components/workshop-site/Layout';
import { Nav } from '../../components/workshop-site/Nav';
import { Tito } from '../../components/workshop-site/Tito';
import { Trainer } from '../../components/workshop-site/Trainer';
import { Wrapper } from '../../components/workshop-site/Wrapper';
import DesignPatterns from '../../content/design-patterns.mdx';
import WorkshopsInclude from '../../content/workshopsinclude.mdx';

export default class extends Component {

  componentDidMount() {
    if(typeof window !== 'undefined' && typeof (window as any).TitoWidget !== 'undefined') {
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
        <Trainer />
      </Layout>
      <Footer />
    </>
  }
}

import { Component } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
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
      <Header>
        <div className="margin">
          <p>April 2, 2019 • Linz • Domhotel</p>
          <h1>Vitaly Friedman in Linz</h1>
        </div>
      </Header>
      <Layout>
        <Wrapper>
          <DesignPatterns />
          <WorkshopsInclude />
        </Wrapper>
        <Tito />
        <Footer />
      </Layout>
    </>
  }
}

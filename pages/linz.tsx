import { Component } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { Nav } from '../components/Nav';
import { Tito } from '../components/Tito';
import { Wrapper } from '../components/Wrapper';
import DesignPatterns from '../content/design-patterns.mdx';

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
        <div className="button-line">
          <p>April 2, 2019 • Linz • Domhotel</p>
          <h1>Vitaly Friedman in Linz</h1>
        </div>
      </Header>
      <Layout>
        <Wrapper>
          <DesignPatterns />
        </Wrapper>
        <Tito />
        <Footer />
      </Layout>
    </>
  }
}

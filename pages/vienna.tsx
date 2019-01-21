import { Component } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
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
      <Header>
        <div className="button-line">
          <p>April 1, 2019 • Vienna • Location tba</p>
          <h1>Vitaly Friedman in Vienna</h1>
        </div>
      </Header>
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

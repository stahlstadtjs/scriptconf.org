import { Component } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { Nav } from '../components/Nav';
import { Tito } from '../components/Tito';
import { Wrapper } from '../components/Wrapper';
import NewAdventures from '../content/adventures.mdx';

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
          <p>March 29, 2019 • Innsbruck • Location tba</p>
          <h1>Vitaly Friedman in Innsbruck</h1>
        </div>
      </Header>
      <Layout>
        <Wrapper>
          <NewAdventures />
        </Wrapper>
        <Tito />
        <Footer />
      </Layout>
    </>
  }
}

import { Component } from 'react';
import { H1 } from '../components/DocHeadline';
import { Footer } from '../components/Footer';
import { HeaderWithLogo } from '../components/Header';
import { Layout } from '../components/Layout';
import { Nav } from '../components/Nav';
import { Tito } from '../components/Tito';
import { Wrapper } from '../components/Wrapper';
import NewAdventures from '../content/adventures.mdx';
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
          <p>March 29, 2019 • Innsbruck • Location tba</p>
          <H1>Vitaly Friedman in Innsbruck</H1>
        </div>
      </HeaderWithLogo>
      <Layout>
        <Wrapper>
          <NewAdventures />
          <WorkshopsInclude />
        </Wrapper>
        <Tito event="scriptconf/vitaly-vienna-2019" />
        <Footer />
      </Layout>
    </>
  }
}

import { Component } from 'react';
import { Layout } from '../components/Layout';
import { Tito } from '../components/Tito';
import { Wrapper } from '../components/Wrapper';
import NewAdventures from '../content/adventures.mdx';
import { Footer } from '../components/Footer';

export default class extends Component {

  componentDidMount() {
    if(typeof window !== 'undefined') {
      (window as any).TitoWidget.buildWidgets()
    }
  }

  render() {
    return <Layout>
      <Wrapper>
        <NewAdventures />
      </Wrapper>
      <Tito />
      <Footer />
    </Layout>
  }
}

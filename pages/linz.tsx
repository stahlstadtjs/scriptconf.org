import { Component } from 'react';
import { Footer } from '../components/Footer';
import { Layout } from '../components/Layout';
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
    return <Layout>
      <Wrapper>
        <DesignPatterns />
      </Wrapper>
      <Tito />
      <Footer />
    </Layout>
  }
}

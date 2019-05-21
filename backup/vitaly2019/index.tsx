import Head from 'next/head';
import { Component } from 'react';
import { EventCard } from '../../components/workshop-site/EventCard';
import { Footer } from '../../components/workshop-site/Footer';
import { HeaderWithLogo } from '../../components/workshop-site/Header';
import { Hexagon } from '../../components/workshop-site/Hexagon';
import { Layout } from '../../components/workshop-site/Layout';
import { Nav } from "../../components/workshop-site/Nav";
import { Tito } from '../../components/workshop-site/Tito';
import { Wrapper } from '../../components/workshop-site/Wrapper';
import VitalyComes from '../../content/linzaly.mdx';
import VitalyBio from '../../content/vitaly.mdx';
import '../../styles/Main.css';

class Index extends Component {
  render() {
    return <>
      <Head>
        <title>ScriptConf presents: Workshops with Vitaly Friedman</title>
      </Head>
      <Nav />
      <HeaderWithLogo />
      <Layout>
        <Wrapper>
          <Hexagon url="/static/assets/vitaly.jpg"
            style={{ float: 'right', marginLeft: '2rem', marginBottom: '3rem' }}/>
          <h1>Meet Vitaly Friedman, the creator of Smashing Magazine</h1>
          <VitalyBio />
        </Wrapper>
        <div className="events">
          <Wrapper>
            <h2 style={{ clear: 'both' }}>Events</h2>

            <VitalyComes />

            <img src="/static/assets/austria.svg" className="map" alt="Map of Austria"/>

            <EventCard
              title="New Adventures in Front-End, 2019 Edition"
              location="Werkstätte Wattens"
              date={new Date('2019-03-29')}
              town="Innsbruck"
              event="scriptconf/vitaly-innsbruck-2019"
              releases="trzs5bko8vk"
              detailsUrl="/vitaly2019/innsbruck" />
            <EventCard
              title="Dirty Little Tricks From The Dark Corners of eCommerce"
              location="25hours hotel"
              date={new Date('2019-04-01')}
              town="Vienna"
              event="scriptconf/vitaly-vienna-2019"
              releases="n2svlwnt-40"
              detailsUrl="/vitaly2019/vienna" />
            <EventCard
              title="Smart Responsive Interface Design Patterns"
              location="Hotel am Domplatz"
              date={new Date('2019-04-02')}
              town="Linz"
              event="scriptconf/vitaly-linz-2019"
              releases="cwpepf9v0q0"
              detailsUrl="/vitaly2019/linz" />
          </Wrapper>
        </div>
        <Tito events={ [
          "scriptconf/vitaly-innsbruck-2019",
          "scriptconf/vitaly-vienna-2019",
          "scriptconf/vitaly-linz-2019" 
        ] } />
      </Layout>
      <Footer />
    </>
  }

  componentDidMount() {
    if(typeof window !== 'undefined' && typeof (window as any).TitoWidget !== 'undefined') {
      (window as any).TitoWidget.buildWidgets()
    }
  }
}

export default Index;

import Head from 'next/head';
import { Component } from 'react';
import { EventCard } from '../components/EventCard';
import { Footer } from '../components/Footer';
import { HeaderWithLogo } from '../components/Header';
import { Hexagon } from '../components/Hexagon';
import { Layout } from '../components/Layout';
import { Nav } from "../components/Nav";
import { Tito } from '../components/Tito';
import { Wrapper } from '../components/Wrapper';
import VitalyComes from '../content/linzaly.mdx';
import VitalyBio from '../content/vitaly.mdx';
import '../styles/Main.css';

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
              title="New Adventures in Responsive Web Design"
              location="Location tba"
              date={new Date('2019-03-29')}
              town="Innsbruck"
              event="scriptconf/vitaly-innsbruck-2019"
              releases="trzs5bko8vk"
              detailsUrl="/innsbruck" />
            <EventCard
              title="Dirty Little Tricks From The Dark Corners of eCommerce"
              location="Location tba"
              date={new Date('2019-04-01')}
              town="Vienna"
              event="scriptconf/vitaly-vienna-2019"
              releases="n2svlwnt-40"
              detailsUrl="/vienna" />
            <EventCard
              title="Smart Responsive Interface Design Patterns"
              location="Domhotel"
              date={new Date('2019-04-02')}
              town="Linz"
              event="scriptconf/vitaly-linz-2019"
              releases="cwpepf9v0q0"
              detailsUrl="/linz" />
          </Wrapper>
        </div>
        <Tito events={ [
          "scriptconf/vitaly-innsbruck-2019",
          "scriptconf/vitaly-vienna-2019",
          "scriptconf/vitaly-linz-2019" 
        ] } />
        <Footer />
      </Layout>
    </>
  }

  componentDidMount() {
    if(typeof window !== 'undefined' && typeof (window as any).TitoWidget !== 'undefined') {
      (window as any).TitoWidget.buildWidgets()
    }  
  }
}

export default Index;

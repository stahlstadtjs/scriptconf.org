import { Component } from 'react';
import { EventCard } from '../components/EventCard';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
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
      <Nav />
      <Header />
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
              detailsUrl="/innsbruck" />
            <EventCard
              title="Dirty Little Tricks From The Dark Corners of eCommerce"
              location="Location tba"
              date={new Date('2019-04-01')}
              town="Vienna"
              detailsUrl="/vienna" />
            <EventCard
              title="Smart Responsive Interface Design Patterns"
              location="Domhotel"
              date={new Date('2019-04-02')}
              town="Linz"
              detailsUrl="/linz" />
          </Wrapper>
        </div>
        <Tito />
        <Footer />
      </Layout>
    </>
  }

  componentDidMount() {
    if(typeof window !== 'undefined') {
      (window as any).TitoWidget.buildWidgets()
    }  
  }
}

export default Index;

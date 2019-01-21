import { Component } from 'react';
import { EventCard } from '../components/EventCard';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { Nav } from "../components/Nav";
import { Wrapper } from '../components/Wrapper';
import '../styles/Main.css';
import { Tito } from '../components/Tito';
import { Footer } from '../components/Footer';

class Index extends Component {
  render() {
    return <>
      <Nav />
      <Header />
      <Layout>
        <Wrapper>
          <h1>Meet Vitaly Friedman, the creator of Smashing Magazine</h1>
        </Wrapper>
        <div className="events">
          <Wrapper>
            <h2>Events</h2>
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

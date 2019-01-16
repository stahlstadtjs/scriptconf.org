import { Layout } from '../components/Layout'
import { Header } from '../components/Header'
import { Nav } from "../components/Nav"
import { Footer } from "../components/Footer"
import { EventCard } from '../components/EventCard';
import { useEffect, createElement } from 'react';

createElement('tito-widget')

export default () => {
  useEffect(() => {
    (window as any).TitoWidget.buildWidgets()
  })
  return <>
    <Nav />
    <Header />
    <Layout>
      <h1>Meet Vitaly Friedman, the creator of Smashing Magazine</h1>
      <EventCard
        title="New Adventures in Responsive Web Design"
        location="Bergisel"
        date={new Date('2019-03-29')}
        town="Innsbruck"
        detailsUrl="/innsbruck" />
      <EventCard
        title="Smart Responsive Interface Design Patterns"
        location="Domhotel"
        date={new Date('2019-04-02')}
        town="Linz"
        detailsUrl="/linz" />
      <tito-widget event="devone/devone-linz-2019"></tito-widget>
    </Layout>
    <Footer />
  </>
}

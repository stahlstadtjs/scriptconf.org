import { Layout } from '../components/Layout'
import { Header } from '../components/Header'
import { Nav } from "../components/Nav"
import { Footer } from "../components/Footer"
import { EventCard } from '../components/EventCard';

export default () => (
  <>
    <Nav />
    <Header />
    <Layout>
      <h1>Meet Vitaly Friedman, the creator of Smashing Magazine</h1>
      <EventCard
        title="New Adventures in Responsive Web Design"
        date={new Date('2019-03-29')}
        town="Innsbruck"
        detailsUrl="/innsbruck" />
    </Layout>
    <Footer />
  </>
)

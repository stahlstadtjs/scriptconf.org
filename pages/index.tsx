import "../styles/Index.css";

import { jamSessionData, speakerData } from "../components/2019-bold/speaker-data";

import About from '../content/2019-about.mdx';
import { Collage } from "../components/2019-bold/Collage";
import { Footer } from "../components/workshop-site/Footer";
import Head from "next/head";
import Join from '../content/2019-join.mdx';
import Location from '../content/2019-location.mdx';
import { Masthead } from "../components/2019-bold/Masthead";
import { Navigation } from "../components/2019-bold/Navigation";
import Partner from '../content/2019-partner.mdx';
import { SpeakerGrid } from "../components/2019-bold/SpeakerGrid";
import { Workshop } from "../components/2019-bold/Workshop";
import Workshops from '../content/2019-workshops.mdx';

export default function() {
  return (
    <>
      <Head>
        <title>Script'19 - The feelgood JavaScript conference</title>
        <link rel="preload" href="/static/assets/tobi.mp4" as="video"/>
      </Head>
      <Navigation />
      <Masthead />
      <section className="text about">
        <About />
      </section>
      <section className="text about">
        <h2 id="speakers">Oct 25: Main conference</h2>
        <p>We invite people who shape the world of JavaScript. Get inspired and learn by our 2019 line-up:</p>
      </section>
      <SpeakerGrid data={speakerData}/>
      <section className="text about">
        <p>Check out our <a href="/schedule">Schedule</a>.</p>
      </section>
      <Location />
      <section className="text about">
        <p>Get some impressions from the previous years</p>
      </section>
      <Collage />
      <section className="text about" id="workshops">
        <Workshops/>
      </section>
      <div className="workshop-wrapper">
        <Workshop first="harry" last="roberts" title="Front-End Performance: Building Faster Websites" url="/harry/workshop-performance" />
        <Workshop first="vitaly" last="friedman" title="New Adventures in Front-End, 2019 Edition" url="/vitaly/workshop-front-end" />
      </div>

      <section className="text about">
        <h2 id="jam">Oct 24: JAMstack JAM session</h2>
        <p>
          On the night before the conference, we have a special evening program. Together with our friends from <a href="https://storyblok.com">Storyblok</a>,
          we invite international speakers who focus around the <strong>JAMstack</strong>! <em>Free for Script'19 attendees - <a href="https://ti.to/scriptconf/scriptconf-2019/with/5fcyqc1rzsg">Limited seats available!</a></em>
        </p>
      </section>
      <SpeakerGrid data={jamSessionData}/>
      <section className="text about">
        <h2>About</h2>
        <Join />
      </section>
      <section className="text about partners">
        <Partner />
      </section>
      <Footer additional="white"></Footer>
    </>
  );
}

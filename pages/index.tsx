import "../styles/Index.css";

import { Footer } from "../components/workshop-site/Footer";
import Head from "next/head";
import { Navigation } from "../components/2019-bold/Navigation";
import Partner from '../content/2019-partner.mdx';
import React from 'react';
import { Wowser } from "../components/2019-bold/Wowser";

export default function() {
  return (
    <>
      <Head>
        <title>Script'19 - The feelgood JavaScript conference</title>
        <link rel="preload" href="/static/assets/tobi.mp4" as="video"/>
      </Head>
      <Navigation />
      <Wowser />
      <section className="text about">
        <h1>Hey everybody this was Script'19!</h1>
        <p>
          Thank you so much for being part of this amazing event! Check out the video above
          to see how <em>Script'19</em> was! And check out the <a href="/2019">2019 archive page</a>.
        </p>
        <p>
          We will return in 2020! In the meantime, check out our
          sister event <a href="https://tsconf.eu">TSConf:EU</a>.
        </p>
      </section>
      
      <section className="text about partners">
        <Partner />
      </section>
      <Footer additional="white"></Footer>
    </>
  );
}

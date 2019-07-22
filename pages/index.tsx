import Head from "next/head";
import { useState } from "react";
import { Collage } from "../components/2019-bold/Collage";
import { SelectedImage } from "../components/2019-bold/SelectedImage";
import { Speaker } from "../components/2019-bold/Speaker";
import { TicketButton } from "../components/2019-bold/TicketButton";
import { Workshop } from "../components/2019-bold/Workshop";
import { Footer } from "../components/workshop-site/Footer";
import About from '../content/2019-about.mdx';
import Join from '../content/2019-join.mdx';
import Location from '../content/2019-location.mdx';
import Partner from '../content/2019-partner.mdx';
import Workshops from '../content/2019-workshops.mdx';
import "../styles/Index.css";


export default function() {
  const [selected, setSelected] = useState("");
  return (
    <>
      <Head>
        <title>Script'19 - The feelgood JavaScript conference</title>
        <link rel="preload" href="/static/assets/tobi.mp4" as="video"/>
      </Head>
      <SelectedImage selected={selected} />
      <TicketButton />
      <div className="more">👇</div>
      <main>
        <div className="group">
          <h1 className="speaker-block reduced">
            <span className="no-nope drop">script'19:</span>
          </h1>
          <Speaker first="emma" last="wedekind" selectedFn={setSelected} />
          <Speaker first="harry" last="roberts" selectedFn={setSelected} />
          <Speaker first="sara" last="vieira" selectedFn={setSelected} />
          <Speaker first="vitaly" last="friedman" selectedFn={setSelected} />
          <Speaker first="jen" last="looper" selectedFn={setSelected} />
          <p className="speaker-block">
            <span className="no-nope drop">... and more!</span>
          </p>
          <p className="speaker-block reduced">
            <span className="no-nope drop">october 25th - linz 🇦🇹</span>
          </p>
        </div>
      </main>
      <section className="text about">
        <About />
      </section>
      <Collage />
      <section className="text about">
        <Join />
      </section>
      <section className="text about">
        <Workshops/>
      </section>
      <div className="workshop-wrapper">
        <Workshop first="harry" last="roberts" title="Front-End Performance: Building Faster Websites" url="/harry/workshop-performance" />
        <Workshop first="vitaly" last="friedman" title="New Adventures in Front-End, 2019 Edition" url="/vitaly/workshop-front-end" />
      </div>
      <Location />
      <section className="text about partners">
        <Partner />
      </section>
      <Footer additional="white"></Footer>
    </>
  );
}

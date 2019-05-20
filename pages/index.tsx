import { useState } from "react";
import { SelectedImage } from "../components/2019-bold/SelectedImage";
import { TicketButton } from "../components/2019-bold/TicketButton";
import { Footer } from "../components/workshop-site/Footer";
import "../styles/Index.css";
import { Speaker } from "../components/2019-bold/Speaker";
import { Collage } from "../components/2019-bold/Collage";
import About from '../content/2019-about.mdx';
import Join from '../content/2019-join.mdx';
import Head from "next/head";


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
      <main>
        <div className="group">
          <h1 className="speaker-block">
            <span className="no-nope drop">script'19:</span>
          </h1>
          <Speaker first="emma" last="wedekind" selectedFn={setSelected} />
          <Speaker first="harry" last="roberts" selectedFn={setSelected} />
          <Speaker first="sara" last="vieira" selectedFn={setSelected} />
          <Speaker first="vitaly" last="friedman" selectedFn={setSelected} />
          <p className="speaker-block">
            <span className="no-nope drop">... and more!</span>
          </p>
          <p className="speaker-block">
            <span className="no-nope drop">october 25th - linz</span>
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
      <Footer additional="white"></Footer>
    </>
  );
}

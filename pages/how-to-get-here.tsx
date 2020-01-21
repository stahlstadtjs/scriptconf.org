import "../styles/Index.css";

import Content from '../content/2019-how-to-get-here.mdx';
import { Footer } from "../components/workshop-site/Footer";
import Head from "next/head";
import React from 'react'
import { TicketButton } from "../components/2019-bold/TicketButton";

export default function() {
  return <>
    <Head>
      <title>Script'19 - The feelgood JavaScript conference</title>
      <link rel="preload" href="/static/assets/tobi.mp4" as="video"/>
    </Head>
    <TicketButton />
    <main className="about text">
      <div className="content">
        <Content />
      </div>
    </main>
    <Footer additional="white"></Footer>
  </> 
}

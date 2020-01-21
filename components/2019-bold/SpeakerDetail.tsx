import "../../styles/Index.css";

import { FC } from "react";
import { Footer } from "../workshop-site/Footer";
import Head from "next/head";
import { Navigation } from "./Navigation";
import React from 'react'

export const SpeakerDetail:FC<{ first: string, last: string}> = ({ first, last, children}) => {
  return <>
    <Head><title>{first} {last} speaking at Script'19</title></Head>
    <Navigation />
    <main className={`about text ${first} speaker-detail`}>
      <div className="content">
        <h1>{first} {last}</h1>
        <img src={`/static/assets/images/${first}.jpg?v=2`} alt={`${first} ${last}`} className="speaker-detail-image" />
        {children}
      </div>
    </main>
    <Footer additional="white"></Footer>
  </>
}

import "../../styles/Index.css";
import { FC } from 'react';
import { Footer } from '../workshop-site/Footer';
import Head from "next/head";

export const Textpage:FC<{ title: string }> = ({ title, children }) => {
  return <>
    <Head><title>{title} | Script'19</title></Head>
    <div className="about text page">
      <h1>{title}</h1>  
      {children}
    </div>
    <Footer additional="white"/>
  </>
}

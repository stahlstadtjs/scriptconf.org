import Head from 'next/head';
import { FC } from 'react';

export const H1:FC<{}> = ({ children }) => {
  return <>
    <Head>
      <title>{ children } | ScriptConf</title>
    </Head>
    <h1>{ children }</h1>
  </>
}

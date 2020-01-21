import React, { FC } from 'react';

import Head from 'next/head'

export const H1:FC<{}> = ({ children }) => {
  return <>
    <Head>
      <title>{ children } | ScriptConf</title>
    </Head>
    <h1>{ children }</h1>
  </>
}

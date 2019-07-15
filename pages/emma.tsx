import { SpeakerDetail } from '../components/2019-bold/SpeakerDetail';
import Emma from '../content/2019/emma.mdx';
import Head from "next/head";

export default function() {
  return <SpeakerDetail first="emma" last="wedekind">
    <Head>
      <meta property="og:image" content="https://scriptconf.org/static/assets/twittercard-emma.jpg" />
      <meta name="twitter:image" content="https://scriptconf.org/static/assets/twittercard-emma.jpg" />    
      <title>Emma Wedekind | Script'19 - JavaScript in Linz</title>  
    </Head>
    <Emma />
  </SpeakerDetail>
}

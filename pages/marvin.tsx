import Marvin from '../content/2019/marvin.mdx';
import { SpeakerDetail } from '../components/2019-bold/SpeakerDetail';
import Head from "next/head";

export default function() {
  return <SpeakerDetail first="marvin" last="hagemeister">
    <Head>
      <meta property="og:image" content="https://scriptconf.org/static/assets/twittercard-marvin.jpg" />
      <meta name="twitter:image" content="https://scriptconf.org/static/assets/twittercard-marvin.jpg" />
      <title>Marvin Hagemeister | Script'19 - JavaScript in Linz</title>  
    </Head>
    <Marvin />
  </SpeakerDetail>
}

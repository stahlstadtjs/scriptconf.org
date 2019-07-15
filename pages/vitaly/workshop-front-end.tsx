import Vitaly from '../../content/2019/workshop-vitaly.mdx'
import { SpeakerDetail } from '../../components/2019-bold/SpeakerDetail';
import Head from "next/head";

export default function() {
  return <SpeakerDetail first="vitaly" last="friedman">
    <Head>
      <meta property="og:image" content="https://scriptconf.org/static/assets/twittercard-vitaly.jpg" />
      <meta name="twitter:image" content="https://scriptconf.org/static/assets/twittercard-vitaly.jpg" />  
      <title>Workshop Front-End Adventures | Script'19 - JavaScript in Linz</title>  
    </Head>
    <Vitaly />
  </SpeakerDetail>
}

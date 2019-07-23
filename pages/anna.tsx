import Anna from '../content/2019/anna.mdx'
import { SpeakerDetail } from '../components/2019-bold/SpeakerDetail';
import Head from "next/head";

export default function() {
  return <SpeakerDetail first="anna" last="henningsen">
    <Head>
      <meta property="og:image" content="https://scriptconf.org/static/assets/twittercard-anna.png" />
      <meta name="twitter:image" content="https://scriptconf.org/static/assets/twittercard-anna.png" />    
    </Head>
    <Anna />
  </SpeakerDetail>
}

import Harry from '../content/2019/harry.mdx'
import { SpeakerDetail } from '../components/2019-bold/SpeakerDetail';

export default function() {
  return <SpeakerDetail first="harry" last="roberts">
    <Harry />
  </SpeakerDetail>
}

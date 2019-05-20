import "../styles/Index.css";
import Emma from '../content/2019/emma.mdx'

export default function() {
  return <>
    <main className="about text emma speaker-detail">
      <Emma />
    </main>
    <img src="/static/assets/images/emma.jpg" alt="Emma Wedekind" className="speaker-detail-image" />
  </>
}

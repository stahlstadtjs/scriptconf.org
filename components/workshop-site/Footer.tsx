import { FC } from 'react';
import Link from 'next/link';

import '../../styles/Footer.css';

export const Footer:FC<{ additional?: string}> = ({ additional }) => {
  return <div className={`footer-area ${additional ? additional : ''}`}>
    <section className="copyright">ScriptConf © { new Date().getFullYear() }</section>
    <section className="footer-nav">
      <nav className="footer-nav-item">
        <strong className="footer-head">About ScriptConf</strong>
        <Link href="/about"><a className="footer-link">About</a></Link>
        <Link href="/legal-notice"><a className="footer-link">Legal notice</a></Link>
        <Link href="/faq"><a className="footer-link">FAQ</a></Link>
        <Link href="/code-of-conduct"><a className="footer-link">Code of conduct</a></Link>
      </nav>
      <nav className="footer-nav-item">
        <strong className="footer-head">Connect with us</strong>
        <Link href="/legal-notice/#contact"><a className="footer-link">Contact</a></Link>
        <Link href="/2018/newsletter"><a className="footer-link">Newsletter</a></Link>
        <a href="https://twitter.com/scriptconf"
          className="footer-link" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.facebook.com/scriptconf/"
          className="footer-link" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="http://stahlstadt-slack.herokuapp.com/"
          className="footer-link" target="_blank" rel="noopener noreferrer">Slack</a>
        <a href="https://javascript-podcast.com"
          className="footer-link" target="_blank" rel="noopener noreferrer">ScriptCast</a>
      </nav>
      <nav className="footer-nav-item">
        <strong className="footer-head">Resources</strong>
        <a href="https://www.youtube.com/channel/UCVbaJU4SUrQrrNs820aZAfQ" 
          className="footer-link" target="_blank" rel="noopener noreferrer">Youtube</a>
        <a href="/2017/" 
          className="footer-link" target="_blank" rel="noopener noreferrer">Script'17</a>
        <a href="/2018/" 
          className="footer-link" target="_blank" rel="noopener noreferrer">Script'18</a>
      </nav>
    </section>
  </div>
}

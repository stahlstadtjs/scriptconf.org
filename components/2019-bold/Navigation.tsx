import Link from "next/link";

export function Navigation() {
  return <>
  <style jsx>{`
    .nav-logo {
      height: 3rem;
    }

    .nav-logo:hover {
      filter: hue-rotate(-149deg) brightness(134%) saturate(117%) drop-shadow(0 0 5px rgba(0, 0, 0, .25))
    }

    .nav-button {
      background-color: crimson;
      color: white;
      font-weight: bold;
      font-size: 1rem;
      padding: 0.75rem 1.25rem;
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.25);
    }

    .nav-button:hover {
      background-color: dodgerblue;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    }

    .nav-link {
      color: crimson;
    }

    .nav-link:hover {
      color: dodgerblue;
    }

    nav {
      max-width: 51rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
  `}
  </style>
  <nav>
    <Link href="/"><a><img className="nav-logo" src="/static/assets/caret.svg" alt="ScriptConf Home"/></a></Link>
    <a className="nav-link" href="/#speakers">Speakers</a>
    <a className="nav-link" href="/#workshops">Workshops</a>
    <a className="nav-link" href="/#jam">JAM Session</a>
    <a className="nav-link" href="/#venue">Venue</a>
    <a className="nav-button" href="https://ti.to/scriptconf/scriptconf-2019">Tickets @ 159 EUR</a>
  </nav>
  </>
}

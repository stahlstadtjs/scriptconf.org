import React from 'react'

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

    .hide-sm {
      display: none;
    }

    @media (min-width: 600px) {
      .hide-sm {
        display: block;
      }
    }
    
  `}
  </style>
  <nav>
    <a href="/"><img className="nav-logo" src="/static/assets/caret.svg?v=2" alt="ScriptConf Home"/></a>
    <a className="nav-link hide-sm" href="/2019/#speakers">Speakers</a>
    <a className="nav-link hide-sm" href="/2019/#workshops">Workshops</a>
    <a className="nav-link hide-sm" href="/2019/#jam">JAM Session</a>
    <a className="nav-link hide-sm" href="/schedule">Schedule</a>
    <a className="nav-button" href="https://ti.to/scriptconf/scriptconf-2019">Tickets @ 159 EUR</a>
  </nav>
  </>
}

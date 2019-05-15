import "../styles/Index.css";
import "../styles/TicketButton.css";

import { useState } from "react";

export function SelectedImage({ selected }) {
  if (selected !== "") {
    return (
      <>
        <div
          className="speaker-img ${selected}"
          style={{
            backgroundImage: `url("/static/assets/images/${selected}.jpg")`
          }}
        />
        <div className={`speaker-color ${selected}`} />
      </>
    )
  }
  return <></>
}

export function TicketButton() {
  return <a className="ticket-button" href="/"><span>Tickets start EUR 129</span></a>
}

export default function() {
  const [selected, setSelected] = useState("");
  return (
    <>
      <SelectedImage selected={selected} />
      <TicketButton />
      <main>
        <div className="group">
          <h1 className="block">
            <span className="no-nope drop">script'19:</span>
          </h1>
          <p
            onMouseOut={() => setSelected("")}
            onMouseOver={() => setSelected("emma")}
            className="block speaker"
          >
            <span className="drop">emma </span>
            <span className="nope">wedekind</span>
          </p>
          <p
            onMouseOut={() => setSelected("")}
            onMouseOver={() => setSelected("harry")}
            className="block speaker"
          >
            <span className="drop">harry </span>
            <span className="nope">roberts</span>
          </p>
          <p
            onMouseOut={() => setSelected("")}
            onMouseOver={() => setSelected("sara")}
            className="block speaker"
          >
            <span className="drop">sara </span>
            <span className="nope">vieira</span>
          </p>
          <p
            onMouseOut={() => setSelected("")}
            onMouseOver={() => setSelected("vitaly")}
            className="block speaker"
          >
            <span className="drop">vitaly </span>
            <span className="nope">friedman</span>
          </p>
          <p className="block">
            <span className="no-nope drop">... and more!</span>
          </p>
          <p className="block">
            <span className="no-nope drop">october 25th - linz</span>
          </p>
        </div>
      </main>
      <section className="text">
        <p className="about">
          script'19 is the <span class="text-highlight">feelgood JavaScript conference</span>. talks may or may not 
          contain JavaScript. but will definitely contain a lot of feelgood.
        </p>
        <p className="about">
          we are <span className="text-highlight">independent</span>, <span className="text-highlight">community-driven</span>, 
          <span className="text-highlight"> affordable</span> and <span className="text-highlight">inclusive.</span>
        </p>
      </section>
    </>
  )
}

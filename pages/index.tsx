import { useState } from "react";
import { SelectedImage } from "../components/2019-bold/SelectedImage";
import { TicketButton } from "../components/2019-bold/TicketButton";
import { Footer } from "../components/workshop-site/Footer";
import "../styles/Index.css";
import { Speaker } from "../components/2019-bold/Speaker";
import { Collage } from "../components/2019-bold/Collage";

export default function() {
  const [selected, setSelected] = useState("");
  return (
    <>
      <SelectedImage selected={selected} />
      <TicketButton />
      <main>
        <div className="group">
          <h1 className="speaker-block">
            <span className="no-nope drop">script'19:</span>
          </h1>
          <Speaker first="emma" last="wedekind" selectedFn={setSelected} />
          <Speaker first="harry" last="roberts" selectedFn={setSelected} />
          <Speaker first="sara" last="vieira" selectedFn={setSelected} />
          <Speaker first="vitaly" last="friedman" selectedFn={setSelected} />
          <p className="speaker-block">
            <span className="no-nope drop">... and more!</span>
          </p>
          <p className="speaker-block">
            <span className="no-nope drop">october 25th - linz</span>
          </p>
        </div>
      </main>
      <section className="text">
        <p className="about">
          script'19 is the{" "}
          <span class="text-highlight">feelgood JavaScript conference</span>.
          talks may or may not contain JavaScript. but will definitely contain a
          lot of feelgood.
        </p>
        <p className="about">
          we are <span className="text-highlight">independent</span>,{" "}
          <span className="text-highlight">community-driven</span>,
          <span className="text-highlight"> affordable</span> and{" "}
          <span className="text-highlight">inclusive.</span>
        </p>
      </section>
      <Collage />
      <Footer additional="white"></Footer>
    </>
  );
}

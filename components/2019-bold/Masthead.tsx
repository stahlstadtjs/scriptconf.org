import { More } from "./More";
import React from 'react'
import { SpeakerBlock } from "./SpeakerBlock";

export function Masthead() {
  return <>
    <style jsx>{`
      .masthead {
        background-image: url(/static/assets/central-backdrop.jpg?v=2);
        background-size: cover;
        margin: 2rem auto;
        max-width: 60rem;
        display: flex;
        align-items: center;
        position: relative;
      }

      @media(min-width: 500px) {

        .masthead {
          min-height: 73vh;
        }
      }

      .masthead:after {
        position: absolute;
        left: 0; 
        bottom: 0;
        right: 0;
        top: 0;
        content: '';
        background-color: hotpink;
        mix-blend-mode: color;
        z-index: 1;
      }
    `}</style>
    <main className="masthead">
      <SpeakerBlock />
    </main>
    <More />
  </>
}

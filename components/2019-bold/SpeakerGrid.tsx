import React from 'react'
import { Speaker } from "./Speaker";

export function SpeakerGrid({data}) {
  return <>
    <style jsx>{`
      .wide {
        margin: 2rem auto 3rem;
        max-width: 60rem;
      }

      .speaker-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        grid-gap: 1rem;
      }
    `}</style>
    <section className="wide">
      <div className="speaker-grid">
        {data.entries.map((speaker, id) => {
          return <Speaker key={id} {...speaker}/>
        })}
      </div>
    </section>
  </>
}

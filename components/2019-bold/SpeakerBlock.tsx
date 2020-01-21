import React from 'react'

export function SpeakerBlock() {
  return <>
    <style jsx>{`

      .speaker-block {
        font-size: 2.5rem;
      }

      @media(min-width: 500px) {

        .speaker-block {
          font-size: 4rem;
        }
      }

      .group {
        z-index: 2;
      }
    `}</style>
    <div className="group">
      <h1 className="speaker-block reduced">
        <span className="no-nope drop">script'19:</span>
      </h1>
      <p className="speaker-block">
        <span className="no-nope drop">javascript for everyone</span>
      </p>
      <p className="speaker-block reduced">
        <span className="no-nope drop">october 25th - linz 🇦🇹</span>
      </p>
    </div>
  </>
}

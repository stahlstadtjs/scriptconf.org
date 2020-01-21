import React from 'react'

export function Wowser() {
  return (
    <>
      <style jsx>
        {`
          .aspect-ratio {
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: 56%;
          }
          .aspect-ratio iframe {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
          }
        `}
      </style>
      <div className="aspect-ratio">
        <iframe
          frameBorder={0}
          src="https://www.youtube.com/embed/hDS2jDt1Zsw"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </div>
    </>
  );
}

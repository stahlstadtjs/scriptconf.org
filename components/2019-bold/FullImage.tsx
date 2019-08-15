import React from "react";

export function FullImage({ src, alt } : { src: string, alt: string }) {
  return <>
    <style jsx>{`
      .full {
        width: 100%;
        display: block;
      }

      .full-wrapper {
        display: block;
        position: relative;
        max-width: 60rem;
        margin: 0 auto;
      }

      .full-wrapper:after {
        background-color: hotpink;
      }

      .full-wrapper:hover:after {
        opacity: 0;
      }

      .full-wrapper:after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          background-color: hotpink;
          mix-blend-mode: color;
          transition: all 0.3s ease;
      }
    `}</style>

    <div className="full-wrapper">
      <img className="full" src={`${src}?v=2`} alt={alt} loading="lazy" />
    </div>
  </>
}

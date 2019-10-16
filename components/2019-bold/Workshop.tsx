import Link from "next/link";

type WorkshopProps = {
  first: string,
  last: string,
  title: string,
  url: string
}

export function Workshop({first, last, title, url}: WorkshopProps) {
  return <>
    <style jsx>{`
      .workshop-container {
        max-width: 100%;
        position: relative;
      }

      .tag {
        position: absolute;
        max-width: 15rem;
        font-size: 1.2rem;
      }

      .tag-line {
        display: inline;
        text-transform: lowercase;
        margin-bottom: 0.2rem;
        background: white;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0.35rem;
        padding-bottom: 0.35rem;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
        line-height: 1.9em;
      }

      .block {
        display: block;
      }

      .workshop-image {
        width: 100%;
      }

      .highlight {
        color: crimson;
      }
      
    `}</style>
    <a className="workshop-container" href={url}>
      <h3 className="tag">
        <span className="block"><span className="highlight tag-line">{first} {last}</span></span>
        <span className="block"><span className="tag-line">{title}</span></span>
      </h3>
      <img className="workshop-image" src={`/static/assets/${first}-workshop.jpg`} alt={`workshop by ${first} ${last}`}/>
    </a>
  </>
}

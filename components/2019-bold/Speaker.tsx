import Link from "next/link";

export function Speaker({ first, last, color, myskills }) {
  return <>
    <style jsx>{`

      .speaker-card {
        position: relative;
      }

      .speaker-img-card {
        position: relative;
        width: 300px;
        height: 300px;
      }

      .speaker-img {
        width: 100%;
        filter: saturate(0%);
      }

      .speaker-img-card:after {
        position: absolute;
        top: 0; bottom: 0; right: 0; left: 0;
        content: '';
        background-color: ${color};
        mix-blend-mode: color;
        z-index: 2;
      }
      
      .speaker-name {
        background-color: white;
        margin-top: -40px;
        margin-left: 130px;
        padding: 0.5rem 1rem;
        font-size: 2rem;
        position: relative;
        z-index: 3;
      }

      .speaker-name h3 {
        margin: 0;
      }

      .speaker-bio {
        color: #454545;
        font-size: 1rem;
      }
    `}</style>
    <Link href={`/${first}`}>
      <a>
        <div className="speaker-card">
          <div className="speaker-img-card">
            <img className="speaker-img" src={`/static/assets/images/${first}.jpg?v=2`} alt="" loading="lazy"/>
          </div>
          <div className="speaker-name">
            <h3>{first} {last}</h3>
            <span className="speaker-bio">{myskills}</span>
          </div>
        </div>
      </a>
    </Link>
  </>;
}

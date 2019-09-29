function Speaker({speaker}) {
  return <>
    <style jsx>{`
    .schedule-speaker{
      width:100px;
      height:100px;
      border-radius:50%
    }
    
    .schedule-speaker-name,
    .schedule-session {
      margin:0
    }


    .schedule-session{
      font-weight:700;
      font-size:1.5rem;
      line-height: 1.1em;
    }


    @media (min-width:500px){

      .schedule-talk{
        display:flex;
        align-content:flex-start
      }
      .schedule-talk-details{
        padding-left:2rem
      }
      .schedule-session{
        font-size:1.5rem
      }
    }
    `}</style>
    <div className="schedule-talk">
    <img className="schedule-speaker" src={speaker.image} alt={speaker.name} />
      <div className="schedule-talk-details">
      <p className="schedule-speaker-name"><a href={speaker.url}>{speaker.name}</a> will talk on</p>
      <p className="schedule-session">{speaker.title}</p>
    </div>
  </div>
  </>
}

export function Schedule({ talks }) {
  return <>
  <style jsx>{`
    .schedule{
      list-style-type:none;
      margin:0;
      padding:0;
      font-size: 1.2rem;
    }
    .schedule-title {
      margin:0;
    }
    .schedule-area{
      background-color:#f3df56;
      padding:20px 0;
      margin:7rem 0
    }
    .schedule-item{
      display:flex;
      padding:2rem 0
    }
    .schedule-item+.schedule-item{
      border-top:1px solid gray
    }
    .scheduled-time{
      padding-right:3rem
    }
    `}</style>
    <ul className="schedule">
    { talks.map(talk =>
      <li className="schedule-item">
        <time className="scheduled-time">{talk.time}</time>
        { talk.speaker && <Speaker speaker={talk.speaker} />}
        { talk.title && <p className="schedule-title">{talk.title}</p> }
      </li>
    )}
  </ul>
  </>
}

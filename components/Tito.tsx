
import { FC } from 'react';
import '../styles/Tito.css';
import { Wrapper } from './Wrapper';

type TitoProps = { 
  event?: string, 
  releases?: string, 
  headline?: string,
  events?: string[]
 };

export const TitoWidget:FC<TitoProps> = ({ 
  event = "devone/devone-linz-2019",
  releases = ""
}) => {
  return <>
    <tito-widget event={event} releases={releases}></tito-widget>
    <p className="tito-notice">
      Do you have troubles seeing the tickets widget? Click <a href={`https://ti.to/${event}`}>here!</a>
    </p>
  </>
}

export const Tito:FC<TitoProps> = 
  ({ 
    event = "devone/devone-linz-2019",
    headline = "Tickets",
    events
  }) => {
  let content;
  if(events) {
    content = events.map((el, i) => <TitoWidget key={i} event={el} />)
  } else {
    content = <TitoWidget event={event} />
  }
  return <div className="tito-area">
    <Wrapper>
      <h2>{ headline }</h2>
      {content}
    </Wrapper>
  </div>
}


import { FC } from 'react';
import '../styles/Tito.css';
import { Wrapper } from './Wrapper';

type TitoProps = { event?: string, releases?: string };

export const Tito:FC<TitoProps> = ({ event = "devone/devone-linz-2019", releases = "" }) => {
  return <div className="tito-area">
    <Wrapper>
      <h2>Tickets</h2>
      <tito-widget event={event} releases={releases}></tito-widget>
    </Wrapper>
  </div>
}

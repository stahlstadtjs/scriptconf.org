import "../../styles/Index.css";
import { Footer } from "../workshop-site/Footer";
import { TicketButton } from "./TicketButton";
import { FC } from "react";

export const SpeakerDetail:FC<{ first: string, last: string}> = ({ first, last, children}) => {
  return <>
    <TicketButton />
    <main className={`about text ${first} speaker-detail`}>
      <div className="content">
        <h1>{first} {last}</h1>
        <img src={`/static/assets/images/${first}.jpg`} alt={`${first} ${last}`} className="speaker-detail-image" />
        {children}
      </div>
    </main>
    <Footer additional="white"></Footer>
  </>
}

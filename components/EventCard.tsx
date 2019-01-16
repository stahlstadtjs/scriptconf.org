import React, { FC } from "react"

import '../styles/EventCard.css'
import Link from "next/link";

React.createElement('tito-button')

type EventCardProps = {
  date: Date,
  town: string,
  title: string,
  detailsUrl: string,
  event?: string
}

export const EventCard:FC<EventCardProps> = ({ title, date, town, detailsUrl, event="ultimateconf/2013" }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{date.toDateString()} in {town}</p>
    <p>
      <tito-button className="btn" event={event}></tito-button>
      <Link href={detailsUrl}><a className="btn secondary">Details</a></Link>
    </p>
  </div>
)

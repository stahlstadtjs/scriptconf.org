import React, { FC } from "react"

import '../styles/EventCard.css'
import Link from "next/link"

import { formatDate } from '../tools/date'

React.createElement('tito-button')

type EventCardProps = {
  date: Date,
  town: string,
  title: string,
  detailsUrl: string,
  location: string,
  event?: string
  releases?: string
}

export const EventCard:FC<EventCardProps> = 
  ({ title, date, town, location, detailsUrl, event="ultimateconf/2013", releases="3elajg6qcxu" }) => (
  <div id={town.toLowerCase()} className="card">
    <div className="card-container">
      <h2>{title}</h2>
      <p>{formatDate(date)} in {town}, {location}</p>
      <p>
        <tito-button event={event} releases={releases}>
          Tickets <span className="hide-sm">@ EUR 399 incl.</span>
        </tito-button>
        <Link href={detailsUrl}><a className="btn secondary">Details</a></Link>
      </p>
    </div>
    <div className="card-image"
      role="img"
      style={{ backgroundImage: `url(/static/assets/locations/${town.toLowerCase()}.jpg)`}} 
      title={`Location ${town}`}/>
  </div>
)

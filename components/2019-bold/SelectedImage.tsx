import React from 'react'

export function SelectedImage({ selected }) {
  if (selected !== "") {
    return (<>
      <div className="speaker-img ${selected}" style={{
        backgroundImage: `url("/static/assets/images/${selected}.jpg")`
      }} />
      <div className={`speaker-color ${selected}`} />
    </>);
  }
  return <></>;
}

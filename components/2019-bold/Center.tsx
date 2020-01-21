import React from 'react'

export const Center = ({ children }) => {
  return <>
    <style jsx>{`
      .centered {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        flex-wrap: wrap;
      }

      .centered + .centered {
        margin-top: 3rem;
      }
    `}</style>
    <div className="centered">
      {children}
    </div>
  </>
}

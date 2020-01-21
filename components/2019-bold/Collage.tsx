import "../../styles/Collage.css";

import React from 'react'

export function Collage() {
  return (
    <div className="grid">
      <div>
        <img
          src="https://scriptconf.org/2018/assets/images/general/stage.jpg?v=2"
          alt="Stage "
          loading="lazy"
        />
      </div>
      <div>
        <img
          src="https://scriptconf.org/2018/assets/inst/16123705_1912801235616741_6248527999444975616_n.jpg?v=2"
          alt="Food"
          loading="lazy"
        />
      </div>
      <div>
        <video
          src="/static/assets/tobi.mp4"
          autoPlay={true}
          muted={true}
          loop={true}
        />
      </div>
      <div>
        <img
          src="https://scriptconf.org/2018/assets/images/2018/crowd.jpg?v=2"
          alt="Crowd"
          loading="lazy"
        />
      </div>
      <div>
        <img
          src="https://scriptconf.org/2018/assets/inst/16230966_1400392266680211_9007714693766184960_n.jpg?v=2"
          alt="Chris"
          loading="lazy"
        />
      </div>
      <div>
        <img
          src="/static/assets/images/andre.jpg?v=2"
          alt="Andre"
          loading="lazy"
        />
      </div>
    </div>
  );
}

//

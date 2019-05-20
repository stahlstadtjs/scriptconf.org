import { FC } from "react";
import '../../styles/Hexagon.css';


export const Hexagon:FC<{ url: string, style?: {} }> = ({ url, style = {} }) => {
  return <div className="hexagon-wrapper" style={ style }>
    <div className="hexagon" style={{ backgroundImage: `url(${url}`}}>
      <div className="hexTop"></div>
      <div className="hexBottom"></div>
    </div>
  </div>
}

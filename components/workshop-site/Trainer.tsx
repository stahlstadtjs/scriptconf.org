import React, { FC } from "react";

import { Hexagon } from "./Hexagon";
import VitalyBio from '../../content/vitaly.mdx';
import { Wrapper } from "./Wrapper";

export const Trainer: FC<{}> = () => {
  return <Wrapper><Hexagon url="/static/assets/vitaly.jpg"
    style={{ float: 'right', marginLeft: '2rem', marginBottom: '3rem' }} />
    <h2>Your Trainer</h2>
    <VitalyBio />
  </Wrapper>
}

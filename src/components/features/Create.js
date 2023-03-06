import styled, { keyframes } from 'styled-components';

// assets
import basic from '@/images/cards/basic.svg';
import bubbles from '@/images/cards/bubbles.svg';
import choccy from '@/images/cards/choccy.svg';
import glitz from '@/images/cards/glitz.svg';
import whip from '@/images/cards/whip.svg';

import Tile from './Tile';
import Card from '../Card';

const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--padV)));
  }
`;

const Marquee = styled.div`
  --padV: 32px;
  display: flex;
  overflow-x: hidden;
  user-select: none;
  gap: var(--padV);
  width: 100%;

  ul {
    align-items: center;
    animation: ${scroll} 40s linear infinite forwards;
    flex-shrink: 0;
    display: flex;
    justify-content: space-around;
    min-width: 100%;
    gap: var(--padV);

    li {
      line-height: 0;
      list-style-type: none;
    }
  }
`;

const Create = () => (
  <Tile
    title="Create your card"
    description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla."
    padding="var(--padH) 0"
    size="1 / 5"
  >
    <Marquee>
      <ul>
        <li>
          <Card
            color="#D2E7FF"
            background="#240048"
            name="Road Runner"
            graphic={bubbles.src}
          />
        </li>
        <li>
          <Card
            color="#E2BEFF"
            background="#4E0261"
            name="Daffy Duck"
            graphic={glitz.src}
          />
        </li>
        <li>
          <Card
            color="#BBA392"
            background="#1E2800"
            name="Taz M. Devil"
            graphic={choccy.src}
          />
        </li>
        <li>
          <Card
            color="#FFBA93"
            background="#060046"
            name="Buggs Bunny"
            graphic={basic.src}
          />
        </li>
      </ul>
      <ul aria-hidden="true">
        <li>
          <Card
            color="#D2E7FF"
            background="#240048"
            name="Road Runner"
            graphic={bubbles.src}
          />
        </li>
        <li>
          <Card
            color="#E2BEFF"
            background="#4E0261"
            name="Daffy Duck"
            graphic={glitz.src}
          />
        </li>
        <li>
          <Card
            color="#BBA392"
            background="#1E2800"
            name="Taz M. Devil"
            graphic={choccy.src}
          />
        </li>
        <li>
          <Card
            color="#FFBA93"
            background="#060046"
            name="Buggs Bunny"
            graphic={basic.src}
          />
        </li>
      </ul>
    </Marquee>
  </Tile>
);

export default Create;

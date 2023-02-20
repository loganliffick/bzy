import styled, { keyframes } from 'styled-components';

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
    animation: ${scroll} 60s linear infinite forwards;
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
    title="Express yourself"
    description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla."
    padding="var(--padH) 0"
    size="1 / 5"
  >
    <Marquee>
      <ul>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
      </ul>
      <ul aria-hidden="true">
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
      </ul>
    </Marquee>
  </Tile>
);

export default Create;

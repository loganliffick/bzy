import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

// assets
import face from '@/images/hearty/modal-face.png';
import mouth from '@/images/hearty/modal-mouth.png';

const populate = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px) scale(0) rotate(40deg);
  }
`;

const Wrapper = styled.div`
  width: 120px;
  height: 80px;
  position: relative;
  margin: 0 auto;

  animation: ${populate} 0.4s cubic-bezier(0.5, -0.5, 0.3, 1.5) forwards;
`;

const Face = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
`;

const blow = keyframes`
  50% {
    transform: translateX(20px) scaleX(1.5) rotate(-10deg);
  }
  100% {
    transform: translateX(10px) scaleX(1) rotate(-10deg);
  }
`;

const Mouth = styled(Image)`
  position: absolute;
  bottom: 10px;
  right: 15px;

  transform: translateX(-4px) scaleX(1) rotate(10deg);
  transform-origin: center left;

  animation: ${blow} 0.6s 0.2s cubic-bezier(0.5, -0.5, 0.5, 1.5) forwards;
`;

const Hearty = () => (
  <Wrapper>
    <Face src={face} alt="Hearty" width={120} />
    <Mouth src={mouth} alt="Hearty" width={38} />
  </Wrapper>
);

export default Hearty;

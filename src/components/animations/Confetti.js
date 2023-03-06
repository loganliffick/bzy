import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

// assets
import face from '@/images/hearty/modal-face.webp';
import mouth from '@/images/hearty/modal-mouth.webp';
import confetti from '@/images/hearty/confetti.svg';

const wrapperAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(80px) scale(0) rotate(40deg);
  }
`;

const Wrapper = styled.div`
  height: 80px;
  margin: 0 auto;
  position: relative;
  width: 120px;

  animation: ${wrapperAnimation} 0.4s cubic-bezier(0, 0, 0, 1.7) forwards;
`;

const Face = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
`;

const mouthAnimation = keyframes`
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
  animation: ${mouthAnimation} 0.6s 0.17s cubic-bezier(0, -0.5, 0, 2) forwards;
`;

const confettiAnimation = () => keyframes`
  to {
    transform: translatex(-576px);
  }
`;

const ConfettiWrapper = styled.div`
  position: absolute;
  right: -96px;
  top: 0;
  height: 72px;
  width: 72px;
  overflow: hidden;
  z-index: 100;

  img {
    position: absolute;
    top: 0;
    left: 0;

    animation: ${confettiAnimation} 0.5s 0.23s steps(8);
  }
`;

const Confetti = () => (
  <Wrapper>
    <ConfettiWrapper>
      <Image src={confetti} alt="Hearty" height={72} />
    </ConfettiWrapper>
    <Face src={face} alt="Hearty" width={120} />
    <Mouth src={mouth} alt="Hearty" width={40} />
  </Wrapper>
);

export default Confetti;

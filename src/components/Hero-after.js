import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

// assets
import front from '@/images/wallet/front.svg';
import back from '@/images/wallet/back.svg';
import hearty from '@/images/hearty/hearty-smile.webp';

const Wrapper = styled.section`
  padding: var(--padV) var(--padH);
  width: 100%;
  position: relative;
`;

const ContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-flow: wrap-reverse;
  justify-content: center;
  margin: 0 auto;
  max-width: var(--full);
  width: 100%;
  position: relative;
`;

const InnerContentWrapper = styled.div`
  flex-grow: 1;
  /* background-color: #ffffff20; // for testing */
  height: 600px;
  max-width: 100%;
  min-width: 476px;
  /* position: relative; */

  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1004px) {
    justify-content: center;
  }
  @media (max-width: 400px) {
    min-width: auto;
  }
`;

const Content = styled.div`
  width: 300px;
  /* background-color: blue; // for testing */
  position: relative;
  height: 600px;

  p {
    position: absolute;
    transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.25);
    opacity: 0;

    &:nth-of-type(1) {
      top: 100px;
      left: 0;
    }
    &:nth-of-type(2) {
      top: 200px;
      right: 0;
    }
    &:nth-of-type(3) {
      top: 300px;
      left: 0;
    }
    &:nth-of-type(4) {
      top: 500px;
      left: 0;
    }
  }

  img {
    position: absolute;
    top: 400px;
    right: 0;
    transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.25);
    opacity: 0;

    &:hover {
      transform: rotate(-12deg) !important;
    }
  }
`;

const WalletWrapper = styled.div`
  align-items: flex-end;
  /* background: rgba(255, 255, 255, 0.05); // for testing */
  display: flex;
  justify-content: center;
  width: 400px;
  height: 600px;

  @media (max-width: 400px) {
    overflow: hidden;
    width: 100%;
  }
`;

const Wallet = styled.div`
  position: relative;
  width: 260px;
  height: 408px;
  transition: 0.8s ease;

  &:first-of-type {
    z-index: -1;

    &:after {
      content: '';
      width: 260px;
      height: 408px;
      filter: drop-shadow(0px 10px 20px rgba(39, 0, 107, 0.1));
      background-image: url(${back.src});
      position: absolute;
      left: 70px;
      top: 0;
    }
  }

  &:last-of-type {
    z-index: 2;

    &:after {
      content: '';
      width: 260px;
      height: 376px;
      filter: drop-shadow(0px -4px 3px rgba(39, 0, 107, 0.25));
      background-image: url(${front.src});
      position: absolute;
      right: 70px;
      bottom: 0;
    }
  }
`;

const HeroAfter = () => {
  const weRef = useRef(null);
  const thinkRef = useRef(null);
  const youllRef = useRef(null);
  const loveRef = useRef(null);
  const itRef = useRef(null);

  // scroll effect
  const handleScroll = () => {
    const we = weRef.current;
    const think = thinkRef.current;
    const youll = youllRef.current;
    const love = loveRef.current;
    const it = itRef.current;
    const position = window.scrollY;

    if (position > 400) {
      we.style.transform = 'scale(1) rotate(-6deg)';
      we.style.opacity = '1';
    }
    if (position > 450) {
      think.style.transform = 'scale(1) rotate(6deg)';
      think.style.opacity = '1';
    }
    if (position > 500) {
      youll.style.transform = 'scale(1) rotate(-6deg)';
      youll.style.opacity = '1';
    }
    if (position > 550) {
      love.style.transform = 'scale(1) rotate(12deg)';
      love.style.opacity = '1';
    }
    if (position > 600) {
      it.style.transform = 'scale(1) rotate(6deg)';
      it.style.opacity = '1';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      <ContentWrapper>
        <InnerContentWrapper>
          <Content>
            <p className="title highlight" ref={weRef}>
              We
            </p>
            <p className="title highlight" ref={thinkRef}>
              think
            </p>
            <p className="title highlight" ref={youllRef}>
              you'll
            </p>
            <Image src={hearty} alt="Hearty" height={104} ref={loveRef} />
            <p className="title highlight" ref={itRef}>
              it
            </p>
          </Content>
        </InnerContentWrapper>
        <WalletWrapper>
          <Wallet />
          <Wallet />
        </WalletWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default HeroAfter;

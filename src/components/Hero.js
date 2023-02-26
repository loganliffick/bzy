import styled from 'styled-components';
import { useContext, useEffect, useRef } from 'react';

// components
import Card from './Card';
import Button from './Button';
import TextLink from './TextLink';

// hooks
import ModalContext from '@/hooks/modal-context';

const Wrapper = styled.section`
  padding: var(--padV) var(--padH);
  width: 100%;
`;

const ContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: var(--full);
  width: 100%;
`;

const Content = styled.div`
  max-width: 460px;

  > :nth-child(1) {
    margin-bottom: 12px;
  }

  > :nth-child(2) {
    margin-bottom: 40px;
  }

  @media (max-width: 1004px) {
    text-align: center;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 1004px) {
    justify-content: center;
  }
`;

const CardWrapper = styled.div`
  align-items: center;
  /* background: rgba(255, 255, 255, 0.05); // for testing */
  display: flex;
  flex-grow: 1;
  height: 400px;
  justify-content: flex-end;
  max-width: 100%;
  min-width: 416px;

  // card
  > div {
    transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.25);
    position: relative;

    // glow
    > :first-child {
      background: radial-gradient(
        circle at 50% -20%,
        rgba(255, 255, 255, 0.13),
        rgba(0, 0, 0, 0.06)
      );
      border-radius: inherit;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  @media (hover: hover) {
    &:hover {
      > div {
        box-shadow: 0px 20px 50px -5px rgba(39, 0, 107, 0.4);
        transform: scale3d(1.07, 1.07, 1.07);
      }
    }
  }

  @media (max-width: 1004px) {
    justify-content: center;
    min-width: auto;
    width: 100%;
  }
`;

const Hero = () => {
  const { setState } = useContext(ModalContext);

  const cardRef = useRef(null);
  const glowRef = useRef(null);

  // 3d hover
  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    let bounds;

    const rotateToMouse = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2,
      };
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

      card.style.transform = `
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
      `;

      glow.style.background = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          rgba(255, 255, 255, 0.5),
          rgba(0, 0, 0, 0.06)
        )
      `;
    };

    const handleMouseEnter = () => {
      bounds = card.getBoundingClientRect();
      document.addEventListener('mousemove', rotateToMouse);
    };

    const handleMouseLeave = () => {
      document.removeEventListener('mousemove', rotateToMouse);
      card.style.transform = '';
      card.style.background = '';
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', rotateToMouse);
    };
  }, []);

  // scroll effect
  const handleScroll = () => {
    const card = cardRef.current;
    const position = window.scrollY;

    if (position > 200) {
      card.style.transform = `rotate(-90deg)`;
    } else {
      card.style.transform = ``;
    }
    if (position > 450) {
      card.style.transform = `translateY(680px) rotate(-90deg)`;
      card.style.pointerEvents = 'none';
      card.style.boxShadow = '0px 10px 10px -5px rgba(39, 0, 107, 0.15)';
    } else {
      card.style.pointerEvents = '';
      card.style.boxShadow = '';
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
        <Content>
          <h1 className="title_large">
            Your <span>new</span> <br /> business card
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit massa mi.{' '}
            Aliquam in hendrerit urna.
          </p>
          <CTAContainer>
            <Button
              onClick={() => {
                setState(true);
              }}
              ariaLabel="Join the waitlist"
            >
              Join the waitlist
            </Button>
            <TextLink
              href="mailto:info@bzy.so"
              external
              ariaLabel="email the Bzy team"
            >
              Get in touch
            </TextLink>
          </CTAContainer>
        </Content>
        <CardWrapper>
          <Card innerRef={cardRef}>
            <div ref={glowRef} />
          </Card>
        </CardWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Hero;

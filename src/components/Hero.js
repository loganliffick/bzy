import styled from 'styled-components';
import { useContext } from 'react';

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

const CardContainer = styled.div`
  flex-grow: 1;
  height: 400px;
  max-width: 100%;
  min-width: 416px;
  /* background: rgba(255, 255, 255, 0.05); */

  display: flex;
  align-items: center;
  justify-content: flex-end;

  > :first-child {
    transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:hover {
    > :first-child {
      box-shadow: 0px 20px 50px -5px rgba(39, 0, 107, 0.4);
      transform: translateY(-20px);
    }
  }

  @media (max-width: 1004px) {
    justify-content: center;
  }
`;

const Hero = () => {
  const { setState } = useContext(ModalContext);

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
        <CardContainer>
          <Card />
        </CardContainer>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Hero;

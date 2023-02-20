import styled from 'styled-components';
import { useContext } from 'react';

// components
import Button from './Button';
import TextLink from './TextLink';
import Logo from './Logo';

// hooks
import ModalContext from '@/hooks/modal-context';

const Wrapper = styled.header`
  padding: 40px var(--padH) 16px;
  width: 100%;
  z-index: 100;
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: var(--full);
  margin: 0 auto;

  @media (max-width: 500px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;

const Nav = styled.nav`
  align-items: center;
  display: flex;
  gap: 24px;

  @media (max-width: 500px) {
    a {
      display: none;
    }
  }
`;

const Navigation = () => {
  const { setState } = useContext(ModalContext);

  return (
    <Wrapper>
      <Content>
        <Logo href="/" />
        <Nav>
          <TextLink
            href={'/#features'}
            ariaLabel="Navigate to the Features section"
          >
            Features
          </TextLink>
          <TextLink
            href={'/#useCases'}
            ariaLabel="Navigate to the Use cases section"
          >
            Use Cases
          </TextLink>
          <Button
            onClick={() => {
              setState(true);
            }}
            ariaLabel="Join the waitlist"
          >
            Join the waitlist
          </Button>
        </Nav>
      </Content>
    </Wrapper>
  );
};

export default Navigation;

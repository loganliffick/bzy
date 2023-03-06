import styled from 'styled-components';
import { useContext } from 'react';

// components
import Logo from './Logo';
import TextLink from './TextLink';

// hooks
import ModalContext from '@/hooks/modal-context';

const Wrapper = styled.footer`
  padding: 200px var(--padH) 64px;
  width: 100%;
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: space-between;

  margin: 0 auto;
`;

const Divider = styled.div`
  background: var(--white);
  height: 1px;
  width: 96px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 24px;
  margin-top: 40px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 500px) {
    flex-direction: column;

    a,
    button {
      margin: 0 auto;
    }
  }
`;

const Footer = () => {
  const { setState } = useContext(ModalContext);

  return (
    <Wrapper>
      <Content>
        <Divider />
        <Logo href="/" />
        <Nav>
          <TextLink
            onClick={() => {
              setState(true);
            }}
            as="button"
          >
            Join the waitlist
          </TextLink>
          <TextLink external href="mailto:info@bzy.so">
            Get in touch
          </TextLink>
          <TextLink external href="https://twitter.com/letsgetbzy">
            Twitter
          </TextLink>
          <TextLink href="/terms">Terms</TextLink>
        </Nav>
      </Content>
    </Wrapper>
  );
};

export default Footer;

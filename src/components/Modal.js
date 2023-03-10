import styled, { keyframes } from 'styled-components';
import { useContext, useEffect } from 'react';

// components
import Button from './Button';
import Confetti from './animations/Confetti';

// hooks
import ModalContext from '@/hooks/modal-context';

const Wrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (hover: none) {
    align-items: flex-start; // iOS fix
  }
`;

const overlayAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  background: RGBA(17, 14, 131, 0.5);
  backdrop-filter: blur(3px);

  animation: ${overlayAnimation} 0.3s ease forwards;
`;

const formAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
`;

const StyledForm = styled.form`
  width: 400px;
  margin: 24px var(--padH);

  background: var(--white);
  border-radius: 24px;
  padding: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;

  animation: ${formAnimation} 0.4s var(--bez) forwards;

  p {
    color: var(--gray-1);
  }

  @media (max-width: 400px) {
    padding: 24px;
  }
`;

const Content = styled.div`
  > div {
    text-align: left;
    display: flex;
    flex-direction: column-reverse;
    gap: 8px;
  }
`;

const StyledLabel = styled.label`
  font-weight: 700;
  color: var(--gray-3);
  font-size: 16px;
  line-height: 22px;
  width: max-content;
  height: 22px;

  &:after {
    font-size: 12px;
    margin-left: 8px;
    color: var(--invalid);
    line-height: 22px;

    display: none;
  }

  &[data-attribute='name']:after {
    content: 'Must be more than 1 character';
  }
  &[data-attribute='email']:after {
    content: 'Invalid email address';
  }
`;

const StyledInput = styled.input`
  background: var(--gray-6);
  border: 1px solid var(--gray-5);
  border-radius: 8px;
  color: var(--gray-2);
  margin-bottom: 16px;
  outline: none;
  padding: 8px;

  transition: all 0.5s var(--bez);

  &:focus {
    background: var(--white);
    box-shadow: 0px 0px 0px 6px var(--gray-6);
    caret-color: var(--primary);
  }

  &:required {
    border: 1px solid var(--gray-5);

    &:focus {
      &:invalid {
        border: 1px solid var(--gray-5) !important;

        ~ ${StyledLabel} {
          &:after {
            display: none !important;
          }
        }
      }
    }

    &:valid {
      border: 1px solid var(--primary);
    }

    &:not(:placeholder-shown):invalid {
      border: 1px solid var(--invalid);

      ~ ${StyledLabel} {
        &:after {
          display: inline;
        }
      }
    }
  }

  @media (hover: none) {
    &:focus {
      outline: none;
    }
  }
`;

const Modal = ({ isActive, isMobile }) => {
  const { setState } = useContext(ModalContext);

  useEffect(() => {
    const body = document.querySelector('body');

    if (isActive) {
      body.style.overscrollBehavior = 'none'; // stops scroll
      body.style.overflow = 'hidden'; // stops scroll
    } else {
      body.style.overscrollBehavior = 'auto';
      body.style.overflow = 'auto';
    }
  }, [{ isActive }]);

  return isActive ? (
    <Wrapper>
      <Overlay onClick={() => setState(false)} data-attribute={isActive} />
      <StyledForm data-attribute={isActive}>
        <Confetti />
        <p className="title_small">Let's get Bzy</p>
        <Content>
          <div>
            <StyledInput
              autoFocus={isMobile ? '' : 'autoFocus'}
              type="text"
              name="name"
              id="name"
              placeholder=" "
              minLength="2"
              maxLength="45"
              required
            />
            <StyledLabel htmlFor="name" data-attribute="name">
              Name
            </StyledLabel>
          </div>
          <div>
            <StyledInput
              type="email"
              name="email"
              id="email"
              placeholder=" "
              minLength="3"
              maxLength="70"
              required
            />
            <StyledLabel htmlFor="email" data-attribute="email">
              Email
            </StyledLabel>
          </div>
        </Content>
        <Button
          secondary
          fullWidth
          as="input"
          type="submit"
          value="Join the waitlist"
          style={{ height: '56px', transform: 'translateZ(0)' }}
        />
      </StyledForm>
    </Wrapper>
  ) : null;
};

export default Modal;

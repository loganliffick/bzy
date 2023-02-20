import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;

  background: var(--gray-6);
  border: none;
  border-radius: 100px;
  box-shadow: inset 1px 1px 2px var(--white),
    inset -1px -1px 2px rgba(39, 0, 107, 0.4);
  color: var(--gray-1);
  cursor: pointer;
  display: block;
  max-width: max-content;
  padding: 12px 24px;
  text-align: center;

  transition: transform 0.2s ease;

  &:active {
    transform: scale(0.9) rotate(2deg);
  }
`;

const Button = ({ onClick, href, external, children, ariaLabel, as }) => (
  <StyledButton
    onClick={onClick}
    aria-label={ariaLabel}
    target={external ? '_blank' : null}
    rel={external ? 'noopener noreferrer' : null}
    href={href}
    as={as}
  >
    {children}
  </StyledButton>
);

export default Button;

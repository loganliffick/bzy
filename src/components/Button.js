import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;

  background: ${(props) =>
    props.secondary ? `var(--primary)` : `var(--gray-6)`};
  border: none;
  border-radius: 100px;
  box-shadow: inset 1px 1px 2px
      ${(props) =>
        props.secondary ? `rgba(255, 255, 255, 0.5)` : `var(--white)`},
    inset -1px -1px 2px rgba(39, 0, 107, 0.4);
  color: ${(props) => (props.secondary ? `var(--white)` : `var(--gray-1)`)};
  cursor: pointer;
  display: block;
  max-width: ${(props) => (props.fullWidth ? '100%' : 'max-content')};
  padding: 12px 24px;
  text-align: center;

  transition: transform 0.2s ease;

  &:active {
    transform: scale(0.9) rotate(2deg);
    transform: scale(0.9);
  }
`;

const Button = ({
  onClick,
  href,
  external,
  children,
  ariaLabel,
  as,
  secondary,
  fullWidth,
  type,
  value,
  style,
}) => (
  <StyledButton
    onClick={onClick}
    aria-label={ariaLabel}
    target={external ? '_blank' : null}
    rel={external ? 'noopener noreferrer' : null}
    href={href}
    as={as}
    secondary={secondary}
    fullWidth={fullWidth}
    type={type}
    value={value}
    style={style}
  >
    {children}
  </StyledButton>
);

export default Button;

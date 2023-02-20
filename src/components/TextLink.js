import styled from 'styled-components';
import Link from 'next/link';

const StyledLink = styled(Link)`
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;

  background: transparent;
  border: none;
  height: max-content;
  color: var(--white);
  cursor: pointer;
  display: block;
  max-width: max-content;
`;

const TextLink = ({ onClick, href, external, children, ariaLabel, as }) => (
  <StyledLink
    onClick={onClick}
    aria-label={ariaLabel}
    target={external ? '_blank' : null}
    rel={external ? 'noopener noreferrer' : null}
    href={href}
    as={as}
  >
    {children}
  </StyledLink>
);

export default TextLink;

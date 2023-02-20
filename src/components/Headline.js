import styled from 'styled-components';

const StyledHeader = styled.header`
  text-align: center;
  margin-bottom: 24px;
  width: 100%;

  > :nth-child(2) {
    margin-top: 12px;
  }

  @media (max-width: 840px) {
    br {
      display: none;
    }
  }
`;

const Headline = ({ children }) => <StyledHeader>{children}</StyledHeader>;

export default Headline;

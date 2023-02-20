import styled from 'styled-components';

import Button from './Button';

const Container = styled.div`
  border-radius: 24px;
  width: 100%;
  background: var(--primary-dark);
  /* display: block; */
  overflow: hidden;
  width: var(--full);

  grid-column: ${(props) => props.size || '1 / 5'};
  padding: ${(props) => props.padding || '64px'};
`;

const StyledHeader = styled.header`
  display: flex;
  padding: 0 var(--padH);
  margin-bottom: var(--padH);
  width: 100%;
  gap: 12px;
  justify-content: space-between;
  flex-wrap: wrap;

  > :nth-child(2) {
    max-width: 474px;
  }
`;

const UseCases = () => (
  <Container>
    <StyledHeader>
      <h3 className="title_small">For Event Hosts</h3>
      <p>
        We may use cookies and other tracking technologies to improve the
        functionality of our web application. By using our web application, you
        consent to our use of these technologies.
      </p>
    </StyledHeader>
    idk
  </Container>
);

export default UseCases;

import styled from 'styled-components';

const Wrapper = styled.section`
  padding: ${(props) => props.top || 'var(--padV)'} var(--padH)
    ${(props) => props.btm || 'var(--padV)'};
  width: 100%;
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 0 auto;
  max-width: var(--${(props) => props.width || 'reg'});
`;

const Section = ({ id, top, btm, width, children }) => (
  <Wrapper id={id} top={top} btm={btm}>
    <Content width={width}>{children}</Content>
  </Wrapper>
);

export default Section;

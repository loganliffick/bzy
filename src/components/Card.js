import styled from 'styled-components';

const CardWrapper = styled.div`
  height: 236px;
  width: 400px;
  border-radius: 20px;
  position: relative;
`;

const CardContent = styled.div`
  height: 100%;
  width: 100%;
  background: #ddfffd;
  border-radius: inherit;
  box-shadow: 0px 10px 10px -5px rgba(39, 0, 107, 0.15),
    inset -1.5px -1.5px 1px rgba(0, 51, 48, 0.5),
    inset 1.5px 1.5px 1px rgba(255, 255, 255, 1);

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: black; //wip fix
  }
`;

const Card = ({ innerRef, children }) => (
  <CardWrapper ref={innerRef}>
    {children}
    <CardContent>
      <p>test</p>
    </CardContent>
  </CardWrapper>
);

export default Card;

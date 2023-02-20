import styled from 'styled-components';

const StyledCard = styled.div`
  height: 236px;
  width: 400px;
  background: #ddfffd;
  border-radius: 20px;
  box-shadow: 0px 10px 10px -5px rgba(39, 0, 107, 0.15),
    inset -1px -1px 1px rgba(0, 51, 48, 0.3),
    inset 1px 1px 1px rgba(255, 255, 255, 0.5);
`;

const Card = () => <StyledCard />;

export default Card;
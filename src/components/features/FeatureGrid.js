import styled from 'styled-components';

import Create from './Create';
import Profile from './Profile';
import Collect from './Collect';
import Wallet from './Wallet';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 16px;
  width: 100%;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const FeatureGrid = () => (
  <Grid>
    <Create />
    <Profile />
    <Collect />
    <Wallet />
  </Grid>
);

export default FeatureGrid;

import styled from 'styled-components';

const StyledTile = styled.div`
  border-radius: 24px;
  width: 100%;
  background: var(--primary-dark);
  display: block;
  overflow: hidden;

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

const Tile = ({ size, padding, title, description, children }) => (
  <StyledTile size={size} padding={padding}>
    <StyledHeader>
      <h3 className="title_small">{title}</h3>
      <p>{description}</p>
    </StyledHeader>
    {children}
  </StyledTile>
);

export default Tile;

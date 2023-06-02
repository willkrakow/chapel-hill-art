import styled from '@emotion/styled';

export const ListItem = styled("li")<{cursor?: boolean}>`
  padding: 20px 15px;
  border-bottom: 1px solid ${props => props.theme.colors.grey};
  color: ${props => props.theme.colors.black};
  list-style: none;
  transition: ease-in-out 0.2s;
  font-family: ${props => props.theme.fonts.body};
  cursor: ${props => props.cursor ? 'pointer' : 'default'};
  &:hover {
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
    transform: scale(1.05) translateY(-2px);
    transform-origin: 0 0;
    box-shadow: 0 4px 4px 0px rgba(0,0,0,0.1);

    & > * {
      color: ${props => props.theme.colors.white};
    }
  }

  &.active {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    transform: scale(1.05);
    box-shadow: 0 4px 2px 0px rgba(0,0,0,0.1);
  }
`;

export const ListItemText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 1.5;
  color: ${props => props.theme.colors.black};
  &.active {
    color: ${props => props.theme.colors.white};
  }
`;

export const ListItemTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 20px;
  line-height: 1.5;
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.white};
`;
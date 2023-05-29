import styled from "@emotion/styled";

const P = styled.p`
  margin: 0;
  padding: 0;
  line-height: 1.675;
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: 300;
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.body};
`;

export default P
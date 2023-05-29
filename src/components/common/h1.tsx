import styled from "@emotion/styled";

const H1 = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.h1};
  margin: 0;
  padding: 0;
  line-height: 1.675;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.heading};
`;

export default H1;
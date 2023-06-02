import styled from "@emotion/styled";

const H3 = styled.h3`
  margin: 0;
  padding: 0;
  font-size: ${(props) => props.theme.fontSizes.h3};
  color: ${(props) => props.theme.colors.primary};
  font-weight: 300;
  line-height: 1.675;
  font-family: ${(props) => props.theme.fonts.heading};
`;

export default H3;
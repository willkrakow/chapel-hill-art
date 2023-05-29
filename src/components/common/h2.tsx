import styled from "@emotion/styled";

const H2 = styled.h2`
  margin: 0;
  padding: 0;
  font-size: ${(props) => props.theme.fontSizes.h2};
  color: ${(props) => props.theme.colors.primary};
  line-height: 1.675;
  font-family: ${(props) => props.theme.fonts.body};
`;

export default H2;
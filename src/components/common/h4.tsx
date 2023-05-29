import styled from "@emotion/styled";

const H4 = styled.h4`
  margin: 0;
  padding: 0;
  font-size: ${(props) => props.theme.fontSizes.h4};
  font-weight: 500;
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.black};
  line-height: 1.675;
`;

export default H4;

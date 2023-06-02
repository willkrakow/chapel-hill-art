import styled from "@emotion/styled";

const H5 = styled.h5`
  margin: 0;
  padding: 0;
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-weight: 500;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.black};
  line-height: 1.675;
`;

export default H5;
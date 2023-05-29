import styled from "@emotion/styled";

const Address = styled.address`
  font-style: italic;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.675;
  margin: 0;
  padding: 0;
  text-align: right;
  color: ${props => props.theme.colors.grey};
  font-family: "Bodoni Moda", serif;
`;

export default Address;
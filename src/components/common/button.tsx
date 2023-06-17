import styled from "@emotion/styled";

const Button = styled.button<{ active?: boolean }>`
    margin-bottom: 10px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid ${props => props.theme.colors.black};
    border-radius: 0;
    font-size: ${props => props.theme.fontSizes.body};
    font-family: ${props => props.theme.fonts.heading};
    text-transform: uppercase;
    letter-spacing: 2px;
    background-color: ${props => props.active ? props.theme.colors.black : props.theme.colors.white};
    color: ${props => props.active ? props.theme.colors.white : props.theme.colors.black};
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    &:hover {
        background-color: ${props => props.theme.colors.primary};
    }
`;


export default Button;
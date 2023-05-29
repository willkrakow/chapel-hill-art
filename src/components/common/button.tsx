import styled from "@emotion/styled";

const Button = styled.button`
    margin-bottom: 10px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 1px;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
    background-color: #fff;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    &:hover {
        background-color: #eee;
    }
`;


export default Button;
import styled from "styled-components";

export const Button = styled.button`
    border: ${props => props.theme === 'primary' ? 'none' : '1px solid #fff'};  

    background: ${ (props) => props.theme === 'primary' ? 
    'linear-gradient(180deg, rgb(255, 106, 69), rgb(37, 58, 248) 100%)' : 'transparent'};

    font-size: 20px;
    font-weight: 700;
    color: rgb(254, 254, 254);
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 30px;

    &:hover {
        background: linear-gradient(180deg, rgb(37, 58, 248), rgb(255, 106, 69) 100%);
    }

    &:active {
        color: rgb(60, 255, 0);
    }
`

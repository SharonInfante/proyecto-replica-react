import styled from "styled-components"

const Buttons = styled.button`
    color: #FFFFFF;
    background-color: #1762A7;
    border-radius: 5px;
    border: none;
    padding: 10px 20px;
`;

function Button() {
    return(
        <Buttons>Join Now</Buttons>
    )
}

export default Button;
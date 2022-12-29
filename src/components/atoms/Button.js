import styled from "styled-components"

const Buttons = styled.button`
    color: #FFFFFF;
    background-color: #1762A7;
    border-radius: 5px;
    border: none;

    &:hover {
        background-color: #2180D8;
    }

    &:focus {
        background-color: ##2796ff;
    }
`;

function Button() {
    return(
        <Buttons  className="btn">Join Now</Buttons>
    )
}

export default Button;
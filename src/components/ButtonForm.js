import styled from "styled-components"

const Buttons = styled.button`
    color: #FFFFFF;
    background-color: #1762A7;
    border-radius: 10px;
    border: none;
    padding: 10px 20px;
`;

const ButtonsForm = styled(Buttons)`
    padding: 10px 36%;
    margin-top: 15px;
`

function ButtonForm() {
    return(
        <ButtonsForm>Join Now</ButtonsForm>
    )
}

export default ButtonForm;
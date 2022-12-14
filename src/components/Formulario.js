import Inputs from "./Inputs"
import styled from "styled-components"
import Label from "./Label";
import Button from "./Button";

const Form = styled.section`
    background-color: #202027;
    height: 12rem;
    width: 12rem;
    margin-top:10%;
`
function Formulario() {
    return(
        <Form>
            <form>
                <Label name="Name:"/>
                <Inputs type="text"/>
                <Label name="Email:"/>
                <Inputs type="email"/>
                <Label name="Password:"/>
                <Inputs type="password"/>
                <Button/>
            </form>
        </Form>
    )
}

export default Formulario;
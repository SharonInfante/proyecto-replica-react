import Label from "./Label"
import Inputs from "./Inputs"
import styled from "styled-components"

const Form = styled.form`
    background: #202027; 
`
function Formulario() {
    return(
        <Form>
            <Label name="Name:"/>
            <Inputs type="text"/>
            <Label name="Email:"/>
            <Inputs type="email"/>
            <Label name="Password:"/>
            <Inputs type="password"/>
        </Form>
    )
}

export default Formulario;
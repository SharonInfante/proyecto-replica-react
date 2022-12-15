import Inputs from "./Inputs"
import styled from "styled-components"
import Label from "./Label";
import ButtonForm from "./ButtonForm";

const Section = styled.section`
    background-color: #202027;
    height: 21rem;
    width: 25rem;
    border-radius: 10px;
`
const Form = styled.form`
    padding-left: 12%;
    padding-top: 7%;
`
function Formulario() {
    return(
        <Section className="Form">
            <Form>
                <Label name="Name:"/>
                <Inputs type="text"/>
                <Label name="Email:"/>
                <Inputs type="email"/>
                <Label name="Password:"/>
                <Inputs type="password"/>
                <ButtonForm/>
            </Form>
        </Section>
    )
}

export default Formulario;
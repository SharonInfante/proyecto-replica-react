import Inputs from "./Inputs"
import styled from "styled-components"

const Form = styled.form`
    background: #202027; 
`
function Formulario(name, type) {
    return(
        <section>
            <form>
                <Inputs name="Name" type="text"></Inputs>
            </form>
        </section>
    )
}

export default Formulario;
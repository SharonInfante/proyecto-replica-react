import Inputs from "../atoms/Inputs"
import Label from "../atoms/Label";
import ButtonForm from "../atoms/ButtonForm";
import '../../css/join.css'

function Formulario() {
    return(
        <section className="formSection">
            <form className="form">
                <Label name="Name:"/>
                <Inputs type="text"/>
                <Label name="Email:"/>
                <Inputs type="email"/>
                <Label name="Password:"/>
                <Inputs type="password"/>
                <ButtonForm/>
            </form>
        </section>
    )
}

export default Formulario;

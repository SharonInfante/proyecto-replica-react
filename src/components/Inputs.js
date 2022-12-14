const { default: styled } = require("styled-components")

const Input = styled.input`
    background: #202027;
    border: 1px solid #2E3852;
    padding: 5px 10px;
`
const Labels = styled.label`
    color: #FFFFFF;
    font-weight: bold;
`

function Inputs (name, type) {
    return(
        <div>
            <Labels>{name}</Labels>
            <Input {...type} ></Input>
        </div>
    )
}

export default Inputs;

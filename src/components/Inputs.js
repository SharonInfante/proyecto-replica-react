const { default: styled } = require("styled-components")

const Input = styled.input`
    background: #202027;
    border: 1px solid #2E3852;
    padding: 5px 10px;
`

function Inputs (type) {
    return(
        <Input/>
    )
}

export default Inputs;

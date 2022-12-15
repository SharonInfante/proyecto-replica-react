const { default: styled } = require("styled-components")

const Input = styled.input`
    background: #202027;
    border: 1px solid #2E3852;
    border-radius: 10px;
    padding: 10px 20%;
    margin-top: 10px;
    margin-bottom: 10px;
`
function Inputs ({type}) {
    return(
        <Input {...type}/>
    )
}

export default Inputs;

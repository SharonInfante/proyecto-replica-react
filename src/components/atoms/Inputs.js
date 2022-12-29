const { default: styled } = require("styled-components")

function Inputs ({type}) {
    return(
        <Input {...type}/>
    )
}

export default Inputs;

const Input = styled.input`
    background: #202027;
    border: 1px solid #2E3852;
    border-radius: 10px;
    padding: 10px 20%;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #596da0;

    &:focus {
        border: 1px solid #596DA0;
    }
`

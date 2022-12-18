const { default: styled } = require("styled-components");

function Label({name}) {
    return (
        <Labels> {name} </Labels>
    )
}

export default Label;

const Labels = styled.label`
    color: #FFFFFF;
    font-weight: bold;
`
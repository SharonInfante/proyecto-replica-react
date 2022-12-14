const { default: styled } = require("styled-components");

const Labels = styled.label`
    color: #FFFFFF;
    font-weight: bold;
`
function Label(name) {
    return (
        <Labels>
            <label>{name}</label>
        </Labels>
    )
}

export default Label;
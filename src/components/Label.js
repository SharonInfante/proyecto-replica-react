const { default: styled } = require("styled-components");

const Labels = styled.label`
    color: #FFFFFF;
    font-weight: bold;
`
function Label(name) {
    return (
        <>
        <Labels>{name}</Labels>
        </>
    )
}

export default Label;
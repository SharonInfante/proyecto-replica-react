import React from 'react'
import styled from 'styled-components'

function ButtonForm() {
  return (
    <BtnForm className="btn2">Join Now</BtnForm>
  )
}

const BtnForm = styled.button`
    color: #FFFFFF;
    background-color: #1762A7;
    border-radius: 5px;
    border: none;

    &:hover {
        background-color: #2180D8;
    }

    &:focus {
        background-color: ##2796ff;
    }
`

export default ButtonForm
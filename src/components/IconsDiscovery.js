import React from 'react'
import styled from 'styled-components'

const Icons = styled.div`
    background-color: #202027;
    width:17%;  
    justify-content: center;
    text-align: center;
`
const Text = styled.p`
    color: #FFFFFF;
`

function IconsDiscovery({name, img}) {
  return (
    <Icons>
        <img src={img}/>
        <Text>{name}</Text>
    </Icons>
  )
}

export default IconsDiscovery;
import React from 'react'
import styled from 'styled-components'

const Icons = styled.div`
  background-color: #202027;
  width: 15%;  
  height: 45%;
  justify-content: center;
  text-align: center;
  padding-top: 2%;
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
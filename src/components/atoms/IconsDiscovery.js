import React from 'react'
import styled from 'styled-components'
import '../../css/discover.css'

const Icons = styled.div`
  background-color: #202027;
  justify-content: center;
  text-align: center;
  padding-top: 2%;
`
const Text = styled.p`
    color: #FFFFFF;
`

function IconsDiscovery({name, img}) {
  return (
    <Icons className='icon'>
        <img src={img} alt="icons"/>
        <Text>{name}</Text>
    </Icons>
  )
}

export default IconsDiscovery;
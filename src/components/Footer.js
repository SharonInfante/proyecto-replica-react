import React from 'react'
import TwitterIcon from '../images/twitter.svg'
import FacebookIcon from '../images/facebook.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Footer() {
  return (
    <Footers>
        <Info>
            <P>About Us</P>
            <Link to="/Join"><P>Contact</P></Link>
        </Info>
        <div>
            <Img src={TwitterIcon}/><P>Twitter</P>
            <Img src={FacebookIcon}/><P>Facebook</P>
        </div>
    </Footers>
  )
}

export default Footer;

const Footers = styled.footer`
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start:6;
    grid-row-end:6;
    display: flex;
    justify-content: flex-end;
    height: 50px;
    padding: 5px 18%;
    width: 100%;
    top: 0;
    background-color: #202027;
    color: #FFFFFF
    align-items: center;
`
const Info = styled.div`
  margin-right: auto;
  display: flex;
  align-items: center;
`
const P = styled.p`
  display: inline-block;
  padding: 0 20px;
  color: #FFFFFF;
  text-decoration: none;
  align-items: center;
` 
const Img = styled.img`
 align-items: center;
`
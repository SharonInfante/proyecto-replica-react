import React from 'react'
import TwitterIcon from '../../images/twitter.svg'
import FacebookIcon from '../../images/facebook.svg'
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
            <Img src={TwitterIcon} className="icon" /><P>Twitter</P>
            <Img src={FacebookIcon} className="iconRRSS"/><P>Facebook</P>
        </div>
    </Footers>
  )
}

export default Footer;

const Footers = styled.footer`
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start:8;
    grid-row-end:8;
    display: flex;
    justify-content: flex-end;
    height: 50px;
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
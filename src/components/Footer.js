import React from 'react'
import TwitterIcon from '../images/twitter.svg'
import FacebookIcon from '../images/facebook.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Footers = styled.footer`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 70px;
    padding: 5px 10%;
    position: fixed;
    width: 100%;
    top: 0;
    background-color: #202027;
    color: #FFFFFF
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
` 
function Footer() {
  return (
    <div>
        <Footers>
            <Info>
                <p>About Us</p>
                <Link to="/"><P>Contact</P></Link>
            </Info>
            <div>
                <img src={TwitterIcon}/><P>Twitter</P>
                <img src={FacebookIcon}/><P>Facebook</P>
            </div>
        </Footers>
    </div>

  )
}

export default Footer;
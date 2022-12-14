import logo from '../images/logo.png'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../Css/index.css'


const TitleLogo = styled.div`
  padding: 5%;
  color: #FFFFFF
`
const Logo = styled.div`
  margin-right: auto;
  display: flex;
  align-items: center;
`
const Li = styled.li`
  list-style: none;
  display: inline-block;
  padding: 0 20px;
  text-decoration: none;
  color: #FFFFFF
` 
function NavBar(){
  return (
    <>
      <Logo>
        <img src={logo} alt="logo"/>
        <Link to="/"><TitleLogo className='titleLogo'>Soundwave</TitleLogo></Link>
      </Logo>
      <nav>
        <ul>
          <Link to="/Discovery"><Li>Discover</Li></Link>
          <Link to="/Join"><Li>Join</Li></Link>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
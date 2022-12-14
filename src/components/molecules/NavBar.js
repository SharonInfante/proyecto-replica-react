import logo from '../../images/logo.png'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../../css/home.css'

function NavBar(){
  return (
    <>
      <Header className="header">
        <Logo>
          <img src={logo} alt="logo"/>
          <Link to="/"><TitleLogo>Soundwave</TitleLogo></Link>
        </Logo>
        <div>
          <ul>
            <Link to="/Discovery"><Li id="menu">Discover</Li></Link>
            <Link to="/Join"><Li id="menu">Join</Li></Link>
          </ul>
        </div>
      </Header>
    </>
  );
};


const Header = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 70px;
  padding: 5px 17%;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #202027;

  &:hover{
    background-color: #2E3852;
  }
`
const TitleLogo = styled.p`
  padding: 5%;
  color: #FFFFFF;
`
const Logo = styled.div`
  margin-right: auto;
  display: flex;
  align-items: center;
  text-decoration-line: none;
`
const Li = styled.li`
  list-style: none;
  display: inline-block;
  padding: 0 20px;
  text-decoration: none;
  color: #FFFFFF;
` 
export default NavBar;


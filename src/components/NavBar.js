import logo from '../images/logo.png'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../Css/App.css'

function NavBar(){
  return (
    <>
      <Header className="header">
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
      </Header>
    </>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 70px;
  padding: 5px 17%;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #202027;
`
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
export default NavBar;
import logo from '../images/logo.png'
import styled from 'styled-components';


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
        <TitleLogo>Soundwave</TitleLogo>
      </Logo>
      <nav>
        <ul>
          <Li>Discover</Li>
          <Li>Join</Li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
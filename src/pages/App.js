import NavBar from "../components/NavBar";
import Button from "../components/Button";
import '../Css/App.css'
import Girl from '../images/landing-page-girl.png'
import styled from "styled-components";
import { ThemeProvider } from "react-bootstrap";

const Title = styled.h1`
  font-size: 3rem;
  color: #FFFFFF;
  margin-left: 2px;
`
const Subtitle = styled.p`
  font-size: 1.3rem;
  color: #FFFFFF;
`
function App() {
  return (
    <>
      <header className="header">
        <NavBar/>  
      </header>
      <div  className="Container">
        <div className="Circle"></div>
        <div className="Circle-1"></div>
        <img src={Girl} className="Girl"/>
        <div className="Info">
          <Title className="H1">Feel The Music</Title><br/>
          <Subtitle className="P">Stream over 20 thousand songs with one click</Subtitle><br/>
          <Button/>
        </div>
        <div className="Circle-2"></div>
      </div>
    </>
  );
}

export default App;

import Button from "../../components/atoms/Button";
import '../../css/home.css'
import Girl from '../../images/landing-page-girl.png'
import styled from "styled-components";
import NavBar from "../molecules/NavBar";

const Title = styled.h1`
  font-size: 3rem;
  color: #FFFFFF;
  margin-left: 2px;
`
const Subtitle = styled.p`
  font-size: 1.3rem;
  color: #FFFFFF;
`
function Home() {
  return (
    <>
      <NavBar/>
      <div  className="container">
        <div className="circle"></div>
        <div className="circle-1"></div>
        <img src={Girl} className="girl" alt="Girl"/>
        <div className="info">
          <Title>Feel The Music</Title><br/>
          <Subtitle>Stream over 20 thousand songs with one click</Subtitle><br/>
          <Button/>
        </div>
        <div className="circle-2"></div>
      </div>
    </>
  );
}

export default Home;

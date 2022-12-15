import "../Css/index.css"
import NavBar from "../components/NavBar";
import Button from "../components/Button";

function App() {
  return (
    <>
      <header className="header">
        <NavBar/>  
      </header>
      <div className="Container">
        <main>
          <h1>Feel The Music</h1>
          <p>Stream over 20 thousand songs with one click</p>
          <Button/>
        </main>
      </div>
    </>
  );
}

export default App;

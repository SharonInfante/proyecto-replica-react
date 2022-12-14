import Button from "../components/Button";
import "../Css/index.css"
import NavBar from "../components/NavBar";

function App() {
  return (
    <div className="Container">
      <header className="header">
        <>
        <NavBar/>  
        </>
      </header>
      <main>
        <h1>Feel The Music</h1>
        <p>Stream over 20 thousand songs with one click</p>
        <Button/>
      </main>
    </div>
  );
}

export default App;

import NavBar from './components/molecules/NavBar';
import './css/app.css'
import { BrowserRouter } from "react-router-dom";
import Router from "./app/Router";

function App() {
  return (
    <>
    <BrowserRouter>  
      <NavBar/>
      <Router/>
    </BrowserRouter>
    </>
  );
}

export default App;

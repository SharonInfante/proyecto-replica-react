import React from 'react'
import Button from "../components/Button";
import "../Css/index.css"
import NavBar from "../components/NavBar";

function Home() {
  return (
    <div className="Container">
        <main>
            <h1>Feel The Music</h1>
            <p>Stream over 20 thousand songs with one click</p>
            <Button/>
      </main>
    </div>
  )
}

export default Home
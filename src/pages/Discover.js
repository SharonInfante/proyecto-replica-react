import covers from '../images/covers.jpg'
import React from 'react'
import NavBar from '../components/NavBar'

function Discover() {
  return (
    <div>
      <header className="header">
        <NavBar/>  
      </header>    
      <div>
        <h1>Discover new music</h1>
        <p>By joining you can benefit by listening to the latest albums released.</p>
        <img src = {covers}/>
      </div>
    </div>
  )
}

export default Discover
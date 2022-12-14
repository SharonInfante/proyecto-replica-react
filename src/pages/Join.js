import React from 'react'
import Formulario from '../components/Formulario'
import NavBar from '../components/NavBar'

function Join() {
  return (
    <div>
      <header className="header">
        <NavBar/>  
      </header> 

      <div>
        <p>Join the</p>
        <p>fun.</p>
        <Formulario/>
      </div>
    </div>
  )
}

export default Join
import React from 'react'
import Formulario from '../components/Formulario'
import NavBar from '../components/NavBar'
import '../Css/Join.css'

function Join() {
  return (
    <>
      <header className="header">
        <NavBar/>  
      </header> 
      <div className='Container'>
        <div className='Title'>
          <p>Join the</p>
          <p className='P'>fun.</p>
        </div>
        <Formulario/>
      </div>
    </>
  )
}

export default Join;
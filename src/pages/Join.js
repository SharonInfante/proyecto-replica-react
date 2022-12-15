import React from 'react'
import Formulario from '../components/Formulario'
import NavBar from '../components/NavBar'
import '../Css/Join.css'
import Footer from '../components/Footer'

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
        <Footer/>
      </div>
    </>
  )
}

export default Join;
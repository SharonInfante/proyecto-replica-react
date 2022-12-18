import React from 'react'
import Formulario from '../molecules/Formulario'
import NavBar from '../../components/molecules/NavBar'
import '../../css/join.css'
import Footer from '../../components/molecules/Footer'

function Join() {
  return (
    <>
      <header className="header">
        <NavBar/>  
      </header> 
      <div className='Container'>
        <div className='Title'>
          <p>Join the <span className='P'>fun</span></p>
        </div>
        <Formulario/>
        <Footer/>
      </div>
    </>
  )
}

export default Join;
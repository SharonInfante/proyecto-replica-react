import covers from '../images/covers.jpg'
import React from 'react'
import NavBar from '../components/NavBar'
import IconsDiscovery from '../components/IconsDiscovery'
import Microphone from '../images/microphone.svg'
import Albums from '../images/albums.svg'
import More from '../images/more.svg'
import Footer from '../components/Footer'

function Discover() {
  return (
    <div>
      <header className="header">
        <NavBar/>  
      </header>    
      <main>
        <h1>Discover new music</h1>
        <div>
          <IconsDiscovery name="Charts" img={Microphone} />
          <br/>
          <IconsDiscovery name="Albums" img={Albums} />
          <br/>
          <IconsDiscovery name="More" img={More} />
        </div>
        <p>By joining you can benefit by listening to the latest albums released.</p>
        <img src = {covers}/>
      </main>
      <>
      <Footer/>
      </>
    </div>
  )
}

export default Discover
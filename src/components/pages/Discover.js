import covers from '../../images/covers.jpg'
import React from 'react'
import NavBar from '../../components/molecules/NavBar'
import IconsDiscovery from '../../components/atoms/IconsDiscovery'
import Microphone from '../../images/microphone.svg'
import Albums from '../../images/albums.svg'
import More from '../../images/more.svg'
import Footer from '../../components/molecules/Footer'
import '../../css/discover.css'

function Discover() {
  return (
    <>
      <header className="header">
        <NavBar/>  
      </header>    
      <div className='Container'>
        <h1>Discover new music</h1>
        <div className='Icons'>
          <IconsDiscovery name="Charts" img={Microphone} />
          <br/>
          <IconsDiscovery name="Albums" img={Albums} />
          <br/>
          <IconsDiscovery name="More" img={More} />
        </div>
        <div className='Subtitle'>
          <p>By joining you can benefit by listening to the latest albums released.</p>
        </div>
        <img src = {covers} className='Cover' alt=""/>
        <Footer className='Footer'/>
      </div>
    </>
  )
}

export default Discover
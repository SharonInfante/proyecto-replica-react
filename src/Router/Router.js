import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import App from '../Js/App'
import Discover from '../pages/Discover'
import Join from '../pages/Join'

function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/Discovery' element={<Discover/>}></Route>
      <Route path='/Join' element={<Join/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router;
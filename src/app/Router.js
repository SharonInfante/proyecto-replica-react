import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/pages/Home'
import Discover from '../components/pages/Discover'
import Join from '../components/pages/Join'

function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Discovery' element={<Discover/>}></Route>
      <Route path='/Join' element={<Join/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router;
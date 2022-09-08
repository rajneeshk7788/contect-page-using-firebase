import React from 'react'
import {Routes, Route } from 'react-router-dom'
import About from './About'
import Contect from './Contect'
import Home from './Home'

const AllRouts = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contect' element={<Contect/>}></Route>
        {/* <Route path></Route> */}
    </Routes>
  )
}

export default AllRouts
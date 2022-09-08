import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
    const data=useState(useParams)
    console.log(data)

   
  return (
    <div>
        <h1>All User</h1>
        <p>Name     : </p>
        <p>Email:</p>
        <p>Phone Number:</p>
        <p>PassWord:</p>
    </div>
  )
}

export default About
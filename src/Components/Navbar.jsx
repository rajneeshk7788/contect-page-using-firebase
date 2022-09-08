import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container-nave'>
        <div>
            <Link to='/'>Home</Link>
        </div>
        <div>
            <Link to='/contect'>Contect</Link>
        </div>
        <div>
            <Link to='/about'>About</Link>
        </div>
    </div>
  )
}

export default Navbar
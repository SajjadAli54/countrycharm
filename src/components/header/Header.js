import React from 'react'

import './Navbar'
import './Header.css'
import Navbar from './Navbar'

function Header() {
    return (
        <div className='flex justify-between'>
            <h1 className='dib myHeader'>The Country Charm</h1>
            <Navbar style={{ width: '50%' }} />
        </div>
    )
}

export default Header
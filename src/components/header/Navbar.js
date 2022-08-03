import React from 'react'
import Item from './Item'

function Navbar() {
    return (
        <nav className='flex justify-between'>
            <Item content='Home' />
            <Item content='Food' />
            <Item content='Hotel' />
            <Item content='Tour' />
        </nav>
    )
}

export default Navbar
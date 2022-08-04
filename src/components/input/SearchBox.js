import React from 'react'
import Button from './Button'
import Dropdown from './Dropdown'
import TextField from './TextField'

const SearchBox = () => {
    return (
        <div className='pa2 ba dib'>
            <Dropdown />
            <TextField type='search' placeholder='Search Post' />
            <Button text='Search' />
        </div>
    )
}

export default SearchBox
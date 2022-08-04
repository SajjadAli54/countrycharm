import React from 'react'
import Button from '@mui/material/Button';
import Dropdown from './Dropdown'

const SearchBox = () => {
    return (
        <div className='pa2 ba dib'>
            <Dropdown />
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='Search'
            ></input>
            <Button variant="contained">Search</Button>

        </div>
    )
}

export default SearchBox
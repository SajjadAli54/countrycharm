import React from 'react'
import Button from './Button'
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
            <Button text='Search' />

        </div>
    )
}

export default SearchBox
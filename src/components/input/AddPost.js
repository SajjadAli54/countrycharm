import React from 'react'
import Button from './Button'
import Dropdown from './Dropdown'
import TextField from './TextField'

function AddPost() {
    return (
        <div className='pa2 dib ba'>
            <Dropdown />
            <TextField type='text' placeholder='Create Post' />
            <Button text='Post' />
        </div>
    )
}

export default AddPost
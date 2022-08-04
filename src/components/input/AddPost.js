import React from 'react'
import Button from '@mui/material/Button';
import Dropdown from './Dropdown'

function AddPost() {
    return (
        <div className='pa2 dib ba'>
            <Dropdown />
            <textarea className='pa3 ba b--green bg-lightest-blue' rows='3'>
            </textarea>
            <Button variant="contained">Post</Button>
        </div>
    )
}

export default AddPost
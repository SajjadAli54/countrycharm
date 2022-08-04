import React from 'react'
import Button from './Button'
import Dropdown from './Dropdown'

function AddPost() {
    return (
        <div className='pa2 dib ba'>
            <Dropdown />
            <textarea className='pa3 ba b--green bg-lightest-blue' rows='3'>
            </textarea>
            <Button text='Post' />
        </div>
    )
}

export default AddPost
import React from 'react'
import AddPost from './AddPost'
import SearchBox from './SearchBox'

function Input() {
    return (
        <div className='flex justify-between'>
            <SearchBox />
            <AddPost />
        </div>
    )
}

export default Input
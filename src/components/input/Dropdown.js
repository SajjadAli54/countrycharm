import React from 'react'

function Dropdown() {
    return (
        <div className='dib'>
            <select className='pa3 ba bg-lightest-blue'>
                <option value="all">Category</option>
                <option value="food">Food</option>
                <option value="hotel">Hotel</option>
                <option value="tour">Tour</option>
            </select>
        </div>
    )
}

export default Dropdown